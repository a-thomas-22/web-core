import { assertValidSafeVersion, createEthersAdapter, createReadOnlyEthersAdapter } from '@/hooks/coreSDK/safeCoreSDK'

const chainId = 660279;
const safeVersion = '1.3.0';


const ethAdapter = createEthersAdapter();
const safeProxyFactoryContract = ethAdapter.getSafeProxyFactoryContract({
    singletonDeployment: deployment,
    safeVersion,
    chainId,
});
console.log(safeProxyFactoryContract);
