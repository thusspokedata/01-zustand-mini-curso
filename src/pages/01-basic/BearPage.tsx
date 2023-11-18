import { useShallow } from 'zustand/react/shallow';
import { useBearStore } from '../../bears/bears.store';
import { WhiteCard } from '../../components';

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBears />
        <PolarBears />
        <PandaBears />
        <BearDisplay />
      </div>
    </>
  );
};

export const BlackBears = () => {
  const blackBear = useBearStore((state) => state.blackBears);
  const incrementBlackBear = useBearStore(
    (state) => state.increasePopulationBlackBears,
  );

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => incrementBlackBear(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBear}</span>
        <button onClick={() => incrementBlackBear(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};

export const PolarBears = () => {
  const polarBear = useBearStore((state) => state.polarBears);
  const incrementBlackBear = useBearStore(
    (state) => state.increasePopulationPolarBears,
  );

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => incrementBlackBear(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {polarBear}</span>
        <button onClick={() => incrementBlackBear(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};

export const PandaBears = () => {
  const pandaBear = useBearStore((state) => state.pandaBears);
  const incrementBlackBear = useBearStore(
    (state) => state.increasePopulationPandaBears,
  );

  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => incrementBlackBear(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBear}</span>
        <button onClick={() => incrementBlackBear(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};

export const BearDisplay = () => {
  // useShallow: shallow compare of the state to avoid re-renders when the state is the same.
  const bears = useBearStore(useShallow((state) => state.bears));
  const doNothing = useBearStore((state) => state.doNothing);
  const addBear = useBearStore((state) => state.addBear);
  const clearBears = useBearStore((state) => state.clearBears);

  return (
    <WhiteCard>
      <h1>Osos Totales</h1>
      <button onClick={doNothing}>Do Nothing</button>
      <button className="mt-2" onClick={addBear}>
        addBear
      </button>
      <button className="mt-2" onClick={clearBears}>
        clearBears
      </button>
      <pre>{JSON.stringify(bears, null, 2)}</pre>
    </WhiteCard>
  );
};
