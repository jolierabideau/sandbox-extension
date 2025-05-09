import papi, { logger } from '@papi/backend';
import {
  ExecutionActivationContext,
  IWebViewProvider,
  SavedWebViewDefinition,
  WebViewDefinition,
} from '@papi/core';
import sandboxExtensionReactWebView from './web-views/sandbox-extension.web-view?inline';

type IWebViewProviderWithType = IWebViewProvider & { webViewType: string };

const reactWebViewProvider: IWebViewProviderWithType = {
  webViewType: 'sandboxExtension.react',
  async getWebView(savedWebView: SavedWebViewDefinition): Promise<WebViewDefinition | undefined> {
    if (savedWebView.webViewType !== this.webViewType)
      throw new Error(
        `${this.webViewType} provider received request to provide a ${savedWebView.webViewType} web view`,
      );
    return {
      title: 'Sandbox Extension',
      ...savedWebView,
      content: sandboxExtensionReactWebView,
    };
  },
};

// const defaultRandomName = papi.projectSettings.getDefault(
//   'sandbox-extension.randomName',
//   'ParatextStandard',
// );

export async function activate(context: ExecutionActivationContext): Promise<void> {
  logger.info('Extension template is activating!');

  const personNamePromise = papi.settings.registerValidator(
    'sandbox-extension.personName',
    async (newValue) => {
      // logger is not working- not able to post to console through this
      logger.info(newValue);
      // block setting this setting
      return false;
    },
  );

  const randomNamePromise = papi.projectSettings.registerValidator(
    'sandbox-extension.randomName',
    async (newValue) => {
      // logger is not working- not able to post to console through this
      logger.info(newValue);
      // allow all sets to this setting
      return true;
    },
  );

  // const sandboxExtensionPDPPromise = papi.projectDataProviders.registerProjectDataProviderEngineFactory(
  //   'sandboxExtension',
  // )

  papi.webViews.getWebView(reactWebViewProvider.webViewType, undefined, { existingId: '?' });

  const reactWebViewProviderPromise = papi.webViewProviders.register(
    reactWebViewProvider.webViewType,
    reactWebViewProvider,
  );

  context.registrations.add(
    await personNamePromise,
    await reactWebViewProviderPromise,
    await randomNamePromise,
  );
}

export async function deactivate() {
  logger.info('Extension template is deactivating!');
  return true;
}
