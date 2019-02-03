import React from "react";

import ContextExample from "./context/Example";
import GetDerivedStateFromPropsExample from "./getDerivedStateFromProps/Example";
import PortalsExample from "./portals/Example";
// will cause app to crash in development
// add to tree and build for production to see demo
import ComponentDidCatchExample from "./componentDidCatch/Example";
import HookExample from "./hooks/Example";
import GetSnapshotBeforeUpdate from "./getSnapshotBeforeUpdate/Example";

export default () => (
  <main>
    <h1>React Examples</h1>
    <ContextExample />
    <GetDerivedStateFromPropsExample />
    <PortalsExample />
    <HookExample />
    <GetSnapshotBeforeUpdate />
  </main>
);
