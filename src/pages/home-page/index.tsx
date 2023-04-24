import { Component, createSignal, Show } from 'solid-js';
import { GetCurrentResponse } from '../../api/weather';
import { useApi } from '../../providers/api';

export const HomePage: Component = () => {
  const { weather } = useApi();

  const [result, setResult] = createSignal<GetCurrentResponse | undefined>();

  weather
    .getCurrent('Moscow')
    .then((res) => setResult(res.data))
    .catch((e) => {
      throw new Error(e);
    });

  return (
    <Show when={result() !== undefined} fallback={<div>Loading...</div>}>
      <div>{JSON.stringify(result())}</div>
    </Show>
  );
};
