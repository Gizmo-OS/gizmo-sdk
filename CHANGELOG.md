# Changelog

## 0.1.0 (2026-07-18)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/Gizmo-OS/gizmo-sdk/compare/v0.0.1...v0.1.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **mcp:** add docs search tool ([b3bd7d8](https://github.com/Gizmo-OS/gizmo-sdk/commit/b3bd7d8b3a8dc5607407dd07f1adc2304b0ba675))
* **mcp:** add option for including docs tools ([e43e6ae](https://github.com/Gizmo-OS/gizmo-sdk/commit/e43e6ae13cfb2213c38bb4f6909876d76d00c89f))
* **mcp:** add typescript check to code execution tool ([ae197f7](https://github.com/Gizmo-OS/gizmo-sdk/commit/ae197f73bc78fc3cd7cf0486c422d442ffda2355))
* **mcp:** enable optional code execution tool on http mcp servers ([4d3c1fa](https://github.com/Gizmo-OS/gizmo-sdk/commit/4d3c1fa2daaa09a455351456a68659823f3229f2))
* **mcp:** handle code mode calls in the Stainless API ([2416aad](https://github.com/Gizmo-OS/gizmo-sdk/commit/2416aad8211ae90f5638fab53f080764f486fe86))
* **mcp:** return logs on code tool errors ([940a6ad](https://github.com/Gizmo-OS/gizmo-sdk/commit/940a6ad5bc0b027418f7ddfed589ee18a072a6cb))
* **stlc:** configurable CI runner and private-production-repo support in workflow templates ([84d52ef](https://github.com/Gizmo-OS/gizmo-sdk/commit/84d52effa6977786e9b3e3a33e81821e10057855))


### Bug Fixes

* **client:** emit method aliases after the methods they reference ([470352c](https://github.com/Gizmo-OS/gizmo-sdk/commit/470352c43e720ebd9f722b378a428ff36082bd42))
* coerce nullable values to undefined ([88209ff](https://github.com/Gizmo-OS/gizmo-sdk/commit/88209ff65d17c9c9120849972ccf04e466a74033))
* **mcp:** add client instantiation options to code tool ([06d974a](https://github.com/Gizmo-OS/gizmo-sdk/commit/06d974a5264b1417092c8f09a05b0508bc993f59))
* **mcpb:** pin @anthropic-ai/mcpb version ([40c5e0d](https://github.com/Gizmo-OS/gizmo-sdk/commit/40c5e0d8a6c6697ffc61b6614efe032f6f0ac12c))
* **mcp:** correct code tool API endpoint ([78c3d5b](https://github.com/Gizmo-OS/gizmo-sdk/commit/78c3d5b86bde9f829f298478580c52593ad4b0cc))
* **mcp:** fix cli argument parsing logic ([6b62eca](https://github.com/Gizmo-OS/gizmo-sdk/commit/6b62ecae75c26316e50603ed588d3cb3286a34ac))
* **mcp:** fix query options parsing ([9cfe136](https://github.com/Gizmo-OS/gizmo-sdk/commit/9cfe136596a5840f1917d702be22d166d8dd1da3))
* **mcp:** pass base url to code tool ([bd7fbb6](https://github.com/Gizmo-OS/gizmo-sdk/commit/bd7fbb61eef8a65f07b4f6b9b4efe91a477a0f62))
* **mcp:** resolve a linting issue in server code ([a067de1](https://github.com/Gizmo-OS/gizmo-sdk/commit/a067de1eaed25b63af58024a0174cd6a7f81bdb9))
* **mcp:** return correct lines on typescript errors ([def135d](https://github.com/Gizmo-OS/gizmo-sdk/commit/def135dc6455fd891f9c1cd378314cc7e3b1d529))
* **mcp:** return tool execution error on api error ([73037a2](https://github.com/Gizmo-OS/gizmo-sdk/commit/73037a252a8706bc362ee125fbf4d235dda299b9))
* **mcp:** return tool execution error on jq failure ([4cc5f83](https://github.com/Gizmo-OS/gizmo-sdk/commit/4cc5f832ad84e8178d05d59cc7920ecf4f6466f2))
* **mcp:** update dxt manifest.json files ([560f541](https://github.com/Gizmo-OS/gizmo-sdk/commit/560f541db3be72055dbedb55bd6d158728e20d0f))


### Performance Improvements

* faster formatting ([c18e6b8](https://github.com/Gizmo-OS/gizmo-sdk/commit/c18e6b82d107a5b878e0460a1d2dbe67decc4720))


### Chores

* ci build action ([998fb69](https://github.com/Gizmo-OS/gizmo-sdk/commit/998fb69228128e1e4878accb33dc889a3b704040))
* **client:** fix logger property type ([280a4df](https://github.com/Gizmo-OS/gizmo-sdk/commit/280a4df9ff122feb562514af343b1154c9d1b1c8))
* **codegen:** internal codegen update ([c1587e6](https://github.com/Gizmo-OS/gizmo-sdk/commit/c1587e6a45c3ab9d38c1c0c54685dfb268326738))
* configure new SDK language ([ec21544](https://github.com/Gizmo-OS/gizmo-sdk/commit/ec21544366f540f52337f15a8bc808522a429ec7))
* do not install brew dependencies in ./scripts/bootstrap by default ([d7e8279](https://github.com/Gizmo-OS/gizmo-sdk/commit/d7e8279bc5c522f731589d5b7b124703f0aa34c6))
* **internal:** codegen related update ([695d61a](https://github.com/Gizmo-OS/gizmo-sdk/commit/695d61ad25f7e87e618ed3088558d830f2778a2b))
* **internal:** codegen related update ([8a34059](https://github.com/Gizmo-OS/gizmo-sdk/commit/8a340592062acb9f8ca02271acfed782fba6ad05))
* **internal:** codegen related update ([e4d0619](https://github.com/Gizmo-OS/gizmo-sdk/commit/e4d06196e7485f5335b82f31dac0aace85664ffb))
* **internal:** codegen related update ([f733157](https://github.com/Gizmo-OS/gizmo-sdk/commit/f73315730d4db10e488594786a3cd7da7345f5dd))
* **internal:** codegen related update ([a2539e5](https://github.com/Gizmo-OS/gizmo-sdk/commit/a2539e53ddcbae2728546f7c91485714f069d6b5))
* **internal:** codegen related update ([487929d](https://github.com/Gizmo-OS/gizmo-sdk/commit/487929db45129b84a992d83701e9558887c9d561))
* **internal:** codegen related update ([85518aa](https://github.com/Gizmo-OS/gizmo-sdk/commit/85518aa9d38153e0b5b033b4cb12c0d4711455ba))
* **internal:** codegen related update ([0924938](https://github.com/Gizmo-OS/gizmo-sdk/commit/092493809cdd41fdf67f259bfbe43ca4a8b76378))
* **internal:** codegen related update ([4f822d1](https://github.com/Gizmo-OS/gizmo-sdk/commit/4f822d1703ad8cf00662c980f99b30c9ba20271e))
* **internal:** codegen related update ([59cc9f3](https://github.com/Gizmo-OS/gizmo-sdk/commit/59cc9f3d7d98097d17416c5ba76c6c05c309dfff))
* **internal:** codegen related update ([3b43f19](https://github.com/Gizmo-OS/gizmo-sdk/commit/3b43f194e2b1c49382d1bb8b32cf755371cb0027))
* **internal:** codegen related update ([66ca35f](https://github.com/Gizmo-OS/gizmo-sdk/commit/66ca35f2a379cd242ac8a51ff17ec7d893673d4c))
* **internal:** codegen related update ([8338c76](https://github.com/Gizmo-OS/gizmo-sdk/commit/8338c76f63db7753c69434ff72cfbd623418287a))
* **internal:** codegen related update ([61d265b](https://github.com/Gizmo-OS/gizmo-sdk/commit/61d265b9460659214984537ebf96e3bb6dd00c25))
* **internal:** codegen related update ([db00560](https://github.com/Gizmo-OS/gizmo-sdk/commit/db00560541505f9952dc85b840bdc2c1d249cbd8))
* **internal:** codegen related update ([9f8a928](https://github.com/Gizmo-OS/gizmo-sdk/commit/9f8a92880adcd1235f72bed847a94368e970f362))
* **internal:** codegen related update ([43abf67](https://github.com/Gizmo-OS/gizmo-sdk/commit/43abf67e582aa95bc59dfa0145192c30038c2336))
* **internal:** codegen related update ([3cdc58d](https://github.com/Gizmo-OS/gizmo-sdk/commit/3cdc58d7a8db4ebc174d4173d5f5e6c9d8d0eae8))
* **internal:** codegen related update ([082964a](https://github.com/Gizmo-OS/gizmo-sdk/commit/082964ae52f216892f6bb88e737a0039cf9be76f))
* **internal:** codegen related update ([faf9baf](https://github.com/Gizmo-OS/gizmo-sdk/commit/faf9bafe97fad3fa662ca19c055186bc803242d7))
* **internal:** codegen related update ([b1211aa](https://github.com/Gizmo-OS/gizmo-sdk/commit/b1211aacac907f7197edc09d9847b445b49d89c2))
* **internal:** codegen related update ([f312c3a](https://github.com/Gizmo-OS/gizmo-sdk/commit/f312c3a15f5655f41e83ea2bfaf31a7b13544887))
* **internal:** codegen related update ([6aad4a3](https://github.com/Gizmo-OS/gizmo-sdk/commit/6aad4a326c67f466961e5e5fc29e4f6aafe70ffe))
* **internal:** codegen related update ([31a82a8](https://github.com/Gizmo-OS/gizmo-sdk/commit/31a82a8bc2ea0989af824b7b9f2877f7b7f630e5))
* **internal:** codegen related update ([39d7594](https://github.com/Gizmo-OS/gizmo-sdk/commit/39d7594fd10581a7c168d5d3738aa8f92e8b7da4))
* **internal:** codegen related update ([b42e18d](https://github.com/Gizmo-OS/gizmo-sdk/commit/b42e18df26f0fa3e48071741cd78b697cbf3cf20))
* **internal:** fix incremental formatting in some cases ([95dc615](https://github.com/Gizmo-OS/gizmo-sdk/commit/95dc615df5cc32b2a79bf3b832e321168e9a8840))
* **internal:** gitignore .mcpb files ([8a6521d](https://github.com/Gizmo-OS/gizmo-sdk/commit/8a6521dcd4d1a6cbdcb47fa492f7f413a5e774ef))
* **internal:** grammar fix (it's -&gt; its) ([92fe8e1](https://github.com/Gizmo-OS/gizmo-sdk/commit/92fe8e1adc0aa3d4f24cc133d9e816a370aa0ad1))
* **internal:** ignore .eslintcache ([c8482a7](https://github.com/Gizmo-OS/gizmo-sdk/commit/c8482a720c6d81d19405262d3a8af394fdd647cd))
* **internal:** remove .eslintcache ([c02ee14](https://github.com/Gizmo-OS/gizmo-sdk/commit/c02ee143985b1411d9b42801a4b146b2432e6ee9))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([ca326b6](https://github.com/Gizmo-OS/gizmo-sdk/commit/ca326b617ca2ba47fa420336a77d63ad1858faa7))
* **internal:** upgrade eslint ([e33cc6d](https://github.com/Gizmo-OS/gizmo-sdk/commit/e33cc6d05e614c8e75b474a2b69a9833aa6a8857))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([59450a6](https://github.com/Gizmo-OS/gizmo-sdk/commit/59450a68dad5beb24a406543919bb459ee40f669))
* mcp code tool explicit error message when missing a run function ([bf7fe4a](https://github.com/Gizmo-OS/gizmo-sdk/commit/bf7fe4ae6c0b198a536d41b639096a3aacc631a1))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([f46d80d](https://github.com/Gizmo-OS/gizmo-sdk/commit/f46d80dd3d6bdc3ec087a726308f64810c4bf749))
* **mcp:** add line numbers to code tool errors ([3d60e3c](https://github.com/Gizmo-OS/gizmo-sdk/commit/3d60e3c160d4836d07f55b4913f90d5f06766307))
* **mcp:** clarify http auth error ([ec1e703](https://github.com/Gizmo-OS/gizmo-sdk/commit/ec1e70367cbed4c30ded632a7e247d3fabe679d8))
* **mcp:** remove deprecated tool schemes ([3af6958](https://github.com/Gizmo-OS/gizmo-sdk/commit/3af6958e7c3d31f0ee428c6438af06fbd2032c5c))
* **mcp:** rename dxt to mcpb ([53bed2f](https://github.com/Gizmo-OS/gizmo-sdk/commit/53bed2ffaa0fa0572b31100cd295888dc9650895))
* **mcp:** update lockfile ([c2b19ea](https://github.com/Gizmo-OS/gizmo-sdk/commit/c2b19eacd68ea6d777f76c5315bfa38dc26963ed))
* **mcp:** upgrade jq-web ([fd28895](https://github.com/Gizmo-OS/gizmo-sdk/commit/fd288952acd680e187c0cd98328d12cd0741ee02))
* update lockfile ([8008319](https://github.com/Gizmo-OS/gizmo-sdk/commit/8008319967daeabe128cfd6f3eeddf330011d07d))
* update SDK settings ([2b62cd7](https://github.com/Gizmo-OS/gizmo-sdk/commit/2b62cd70c0b357148f2292ba37eefc0a6cf62b53))
* use latest @modelcontextprotocol/sdk ([5edc1b6](https://github.com/Gizmo-OS/gizmo-sdk/commit/5edc1b69010bef40426df7c90fc0c0348bfdffaf))
* use structured error when code execution tool errors ([1ccafa4](https://github.com/Gizmo-OS/gizmo-sdk/commit/1ccafa4c82b2f32ed73f6e835f29f58130dbb58a))
