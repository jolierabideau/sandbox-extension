import { useSetting } from '@papi/frontend/react';
import { Button } from 'platform-bible-react';

globalThis.webViewComponent = function SandboxExtension() {
  const [personName, setPersonName] = useSetting('sandbox-extension.personName', 'Jolie 1');
  // const [randomName, setRandomName] = useProjectSetting(
  //   'helloWorld',
  //   'hwtest',
  //   'sandbox-extension.randomName',
  //   'Bob 1',
  // );

  return (
    <div>
      <div className="title">
        Sandbox Extension <span className="framework">React</span>
      </div>
      <div>
        <h2>Person name (user setting): {personName}</h2>
        <input value={personName} onChange={(e) => setPersonName(e.target.value)} />
      </div>
      <div>
        <Button variant="outline">Test Button</Button>
      </div>
    </div>
  );
};
