import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

export interface IMarketProps {}

export default function Market(props: IMarketProps) {
  const router = useRouter();

  return (
    <div>
      <h1>Market</h1>
      <b>{JSON.stringify(router.query)}</b>
    </div>
  );
}
