import React from 'react';
import ExtentionListTopHeader from './ExtentionListTopHeader';
import GRidComponent from './GRidComponent';

const ExtensionListComp = () => {
  return (
    <section className="flex flex-col gap-5">
      {/* top header */}
      <ExtentionListTopHeader />
      {/* grid component */}
      <GRidComponent />
    </section>
  );
};

export default ExtensionListComp;
