import ExtensionListComp from './component/modules/ExtensionListComp';
import HeaderModule from './component/modules/HeaderModule';

function App() {
  return (
    <main className="w-full max-w-[375px]  lg:w-full lg:max-w-[1440px] mx-auto py-4 px-6 h-auto bg-[#d6e2f5] flex flex-col   gap-10">
      <HeaderModule />
      <ExtensionListComp />
    </main>
  );
}

export default App;
