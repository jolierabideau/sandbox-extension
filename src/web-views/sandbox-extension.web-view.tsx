import { useSetting } from '@papi/frontend/react';
import { useCallback } from 'react';

globalThis.webViewComponent = function SandboxExtension() {
  const [name, setNameInternal] = useSetting('sandbox-extension.personName', 'Jolie 1');
  // const [nameTemp, setNameTemp] = useState(name);

  const setName = useCallback(
    (newName: string) => {
      setNameInternal(newName);
    },
    [setNameInternal],
  );

  return (
    <div>
      <div className="title">
        Sandbox Extension <span className="framework">React</span>
      </div>
      <div>
        <h2>{name}</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
};
