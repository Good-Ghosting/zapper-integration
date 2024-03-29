import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { presentBalanceFetcherResponse } from '~app-toolkit/helpers/presentation/balance-fetcher-response.present';
import { BalanceFetcher } from '~balance/balance-fetcher.interface';
import { Network } from '~types/network.interface';

import { GRO_DEFINITION } from '../gro.definition';

const network = Network.AVALANCHE_MAINNET;

@Register.BalanceFetcher(GRO_DEFINITION.id, network)
export class AvalancheGroBalanceFetcher implements BalanceFetcher {
  constructor(@Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit) {}

  async getLabsTokenBalances(address: string) {
    return this.appToolkit.helpers.tokenBalanceHelper.getTokenBalances({
      address,
      appId: GRO_DEFINITION.id,
      groupId: GRO_DEFINITION.groups.labs.id,
      network: Network.AVALANCHE_MAINNET,
    });
  }

  async getBalances(address: string) {
    const [labsTokenBalances] = await Promise.all([this.getLabsTokenBalances(address)]);
    return presentBalanceFetcherResponse([
      {
        label: 'Labs',
        assets: labsTokenBalances,
      },
    ]);
  }
}
