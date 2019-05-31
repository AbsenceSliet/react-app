

export const content = require.context('./icons',false,/\.svg$/)
export const iconAll = (requireContext : any) => requireContext
    .keys()
    .map(requireContext)
iconAll(content)