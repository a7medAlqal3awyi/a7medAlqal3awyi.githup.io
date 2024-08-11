'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4e69603fce87bec0e3e7b9f74f861b0c",
".git/config": "ef0c374dc3d1d02014290bbfb17f4c33",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a89ee733ca2ad1427ec1906fd23331f9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "948f1bb75afebcd3fea42f55391a8261",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "279f99ba4e1d55d4622e010d8ddbe3f5",
".git/logs/refs/heads/main": "9e57cc2f97763ed94c49abbf09e1d893",
".git/logs/refs/remotes/origin/main": "9e70bedee1638146e8092b20adfba21a",
".git/objects/00/16d518036e4358a11ec4da3c478f86682a97d4": "8b0797bc5dda19c08c6176eefff93c06",
".git/objects/00/d439387a71d8f8b9f3d5c46e48c760b55e3e76": "b1a6bf85e83382500231418ee3e7c485",
".git/objects/07/2b51a15f1134a0bbaf58f0f31a495ceb6cefa3": "39dc1efdf0dfb7bad5ebd0de7e2d5ea5",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/07/d3d410e55d638da9c9262168836b669b95f133": "c0848c701161e8716d02b8fce8c52153",
".git/objects/08/568442e6f7d08bae2b27ab27c69e37aafb4330": "4dcdd9a625d30280c774de6ff276a09e",
".git/objects/09/b02d03c97d39286efd8198a2b2cb7cd2fe2429": "e097edf46ab90f6f2b8988da1a8a0bf7",
".git/objects/0c/5642b755429911503f90c1fc5543503bf5f8ba": "d322ec1a5f467106f603f083322c5339",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/57bf88d289484eafe00ef71e0b10a98c836eb8": "04e69a8162218fe47ed4a965b66aed98",
".git/objects/12/1e30c1c727c8b79573a7c11517cbdc55d046a2": "6172249ebbea69f84cb111b0d5aa85e8",
".git/objects/12/365b91284c705177c6eb220bd33d9451d13921": "5d49806096e058d958711a7bd6c93f78",
".git/objects/14/8191d64789a85fed3a4f6cec3177205c94554c": "3ca9547b362517625b70dac1d9f6cd81",
".git/objects/15/10c1ecf13541bf0a0780fc11122ab0a6daad85": "74e3836418953314a9068a35022154a4",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/bb6dea825b2399938b13956e1e7d96a1e26313": "574782d7fc29b2918f927f21a3415cd4",
".git/objects/1b/22ab4f4bc0623c0e1ecde8f9250d4dc5a96b5f": "dcf8fb2455623c5a69e78dee03d34e87",
".git/objects/1d/b65854368c35e99b500e2728de2df9b7b2db46": "8a8c469da5942cc815bf8302dd76d4d0",
".git/objects/1d/bd701bb49b5849b44fbd80d9b0c5803b5bb1f6": "496f3f199970e3cf0d82c3504120feac",
".git/objects/1f/204e1aacb21d27cf657e1d87f94d6ce786ea45": "8f62d27f5e03a03c33074752bc755466",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/57038e8b5c4f10a2e867123bef0f78ad16a520": "92be69fa9d831a20830efde1500cea14",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/c90c63aeab289f3ba37c3304b0d5376c6aa9e6": "c545c2bc945d2fd8f77500620afe1ed0",
".git/objects/24/a75d2786a211e0235628d720e78009728d25ae": "3f3e63d36f6d06f7f5b7149d07a4a0c3",
".git/objects/25/8082c736f5505fb0b8c97b396224977dfc618e": "30e63025c3e41f97c1a54892840577fc",
".git/objects/26/a72156dbc59744563f36e987c8f8922f0e96f5": "136bab7638fd9d1af3831ba31f194746",
".git/objects/27/2c138825abc200c00f8a6750a41ca786536471": "1d4c440d56ce2b4e1b8a7672fce69cce",
".git/objects/27/a708586662b81c21968b038b69b8e44b8727b3": "dde3ff904984863daf776bc87ba035d0",
".git/objects/2b/5506fff37dd882baf997e4304f7ddd61b42c55": "96961bf7c8dcec2df9b4e9be14c6638d",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2c/be68ea2d0382fdf7d7729541e516e731933f07": "6025cf960bcfa28e93a813cf9eba6a6e",
".git/objects/2d/0049788d1a36d61cacec78e1a8d7ae50048212": "453dd03ecd16fe3b94cbc55ae84af165",
".git/objects/2d/09b5fcd0d2785f2d49aa083b89aa92d1d1c511": "524d69428d6327efaf69db4f76446187",
".git/objects/2d/4dcb45ec2f85da1eeaea09f8601f46e3f169b3": "96a6003e91e24eb85ec3acbe21fbde64",
".git/objects/2d/d0d9eb801b30f0f9564074ada4062cefd5c753": "8b91cb2f8be52d32bc80c010247e10ad",
".git/objects/2e/4c0b1bd59caf7e553a4b6c0ce4665686c60583": "4396cfb788b926e4cf2e2d2f991a4d71",
".git/objects/32/7a46814da0f74c458bbbf8e5ec590ab6a40808": "348e2cf8f562142a29cfee00c6b9757d",
".git/objects/32/d1481449bdb4e6dfda79fefa3eaeb5658c0db3": "06d9270d8499d5628de92717614560ea",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/37/f1d0959512911ba179052cd2c334615fc0d278": "89a206bd38750bcb8e44412fdb3c935e",
".git/objects/38/aa0728fb0a71ded55574d5aa11779397160f2c": "4fee9fa1159e752ba035e71230a43a08",
".git/objects/3c/5fa9ad4ea97d7087a0f0c1ee8716fe59fcfe83": "9f8d9b5e2d07a92c157defaf2c425a9c",
".git/objects/3d/1abf46325d7b5fc24c26825a49c27871815f7a": "8887e108d4d8e32fb059ce779c611a74",
".git/objects/3d/b5349e0ed3f03f878f2472d5ec610229461d0d": "001d8ebf73a96a77c7b2936089d76e4d",
".git/objects/3e/125c11aae6b77273a219225d855266f71e85ad": "a296469eb02f92e4b6897e9e3cfb70fe",
".git/objects/3e/c56287ca38384907290f201c261ee16667aa75": "fde5b6929189022c874189b1da5f173d",
".git/objects/3f/101372e0545d812b8cb492dbcdbd27b6581e61": "98a3271cfafe711507bbc471d1f126a2",
".git/objects/40/bd46e319e4a5d92a905c6222a42247a1af4256": "045b32cc631d3183341ed01d33224502",
".git/objects/46/63b90f3f14b7bb87fa7178ca203e5ad6acac36": "009d68a9ad9b2e42f0394121787a20cf",
".git/objects/49/73d5fb9e5f1d29596e97ab03e53260fb3ff3d0": "6081c25ca58965fc039dabab98fec784",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/336d73b1a6de71a7699f99419ba93729c428ca": "62193e3248e0bc1b190b685f89df8772",
".git/objects/4e/1b00cc9b5b8a5873339915a0224676d45ab80b": "0a2976ff59ab7b9051b2215d40d53ef1",
".git/objects/4e/7a8b93e434fa41ef1af32920299f50302fa0f6": "2ce49eb499c7bd2805969cd67f1a32e7",
".git/objects/4e/dea5892d442fa4ae87dc1f5df07f13a77a4ead": "bd25b667a6e4f048b1652830959309f1",
".git/objects/51/727aed1612869134a7e53e13af514867f306fc": "38766e8ccd43ed3d9bcdf0447328b20f",
".git/objects/51/ba77342546d42bc08524b89fa870442611454b": "0b261bc83e484ea841dc088d721f3657",
".git/objects/51/dc22a70d5a26416f2f5590963ea56ae29b4d19": "cba5fdd0c618b3f0fc60f653988fd66a",
".git/objects/53/842fb8a7ae1f4eb301404f26f3c069a4b97780": "6ea34deaf25d8099163bfc4256dacb64",
".git/objects/54/93cf7376e4042879858528db989932c4e0b1cc": "39133044524ec597eb345888b518b9f2",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/56/35c2ac67c19a0e59de4d95b753c081854046f0": "84488270fcccfd73c97f5c095b501bf1",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/b20111f8d1c746232f99bd3e54fbb2f1300aad": "ae5d7eaaa9a817877d4b9250b8d95c7b",
".git/objects/58/e5d02db236c50f3f285fcf687809fe9e9dc781": "ed83edce36500c20f1908386a8db5821",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/3a0c53f4e95c955e275af46c3e9f18acd910c0": "7d95defe137ce7e291bdcafb0cb29089",
".git/objects/5d/59a65b2cfb0ef238884f4fce1653fb33e38887": "9aa3b8742799d358d659edc4f469128e",
".git/objects/62/3a71dad8cedfb468ccb8000186f20d6aaa2a31": "66bebb477d6e932391b768b1471b04a1",
".git/objects/62/97f4860a04059f74e7e10df1af39de309eec1d": "d1ddceeb1381328f5e369b2ab987baf0",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/67/b9b07ea5fc06a94af2aaf8c414b6ee4794f9f2": "d596fb1daa12928c17168b6046796411",
".git/objects/6b/c91b0601c1b0b0982521ff77db09af452db015": "49c45665924f8fdf3295c859afa1a15b",
".git/objects/6e/70a6c6f729189e74a6d5a03ff42b0f2c9d8cd1": "cda6f09cdd971615c196b40b97eba7b7",
".git/objects/70/93e2f5fcd6f3ec877ee7edea3a33ece456221d": "29bfa414fe9da419322e1f3de4b5c0fe",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/5f89969662354429d9fa7c89b2e7fe9c786b80": "a7c7c6d60b8f7ef4655d263e705f5e79",
".git/objects/72/a3b0bd464ee9396e330f4c72b37d25e496c8fe": "062554ba34b461c94c3c8ef3e6317833",
".git/objects/77/019b617a94df4aa278289e28b171d23c2727bc": "afb00465fd35db15cb6cbc2f8ab452a7",
".git/objects/7b/d42390e023d876352fd7371955d2d4239ae9e7": "6f65da601836ee0fcbd1b46b1ad2fbf4",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/9c9e332c278ee15546f5164220b5320481b9f2": "99b8fba6bf1986e0e6fdb1c4145972c3",
".git/objects/7d/897e0bbaa0c721adb464036185f3ce0724f74b": "2cba95ed9eab17b49cd60a78cefcb97e",
".git/objects/7d/fbb63a97956e066c6805e1f721df93211afa20": "ee98ad7ab065c55e088c999003bf96bf",
".git/objects/81/54c87a5360fc7f5e270cdc877b3bbaf4857e44": "20a137e20d8a68ed52f8734f086e9080",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/07b743a89ebc82b32876f8151921985c954a80": "c3184531a28e91a3ab49fdce23f67718",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/493824c1ecd5105feac670b7f33dc8f27e2670": "53fe1c5e900165995d276d9cdd921377",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/db8b7cb8b943899afa21bf66cfee3551ef2604": "f0117740ec7b3be1b8494ceee6cf6ecf",
".git/objects/93/f91701d968f0e9d234b4d4ddbe5a0ff4cddfcf": "be9ee3b60a3d35e9cc0ebc915c6cb08c",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/81fbd92c4497428cefb8a3cc7fcadf2b98b051": "6e6e8196227eb2ee96796cd581b06507",
".git/objects/99/a871e0367537193b2dc546a3f6558cc685c789": "e1e1ac1caa4bc1eb7428789be726f537",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9e/e32c73bd8cbf73f32924134e150e73e53d1932": "b34380d2d8c6fabba452ed44d661ff8c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/739c350ddc84a8d8d01ca6f64120d636a6e514": "8d357ce7643b7c3bcf7839e589f04648",
".git/objects/a3/27790d9a8635020e8e4e8d2034a09831123104": "23d231ef674e20c910b4c96e704ed2fb",
".git/objects/a3/2a731d1eb6c41a6cb63ec0428ce32ebc98fe2a": "fdf64340428e17bec225d4e18e2c33c7",
".git/objects/a3/c6123281cec3151be19a7662e1ad7da0775cdf": "19b12ca3c5afa9befdcbac8fbf50a8c9",
".git/objects/a4/5441121d44087fb77df739418f9ef0b98d13c6": "ba09742d09d79b27ac3edbd458ce8349",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a7/2c1f8aa5b46c9893bf252ef42db36d949a5da5": "b5a1c57356977aa679b5417308b7e3ea",
".git/objects/aa/9033a801f73539a025d9f4012fa823c27ff3b1": "6489b5eb717a3de0e8081066d4570d80",
".git/objects/af/e185d92a81beca660938d066adf3be7c90fe53": "3d8c64b06a5d3b49cf5652daaa1e0dcc",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/23214900bff993ec7889dade98e047c07f4893": "7802bbe13e3dcff4bf0c4486130be2ec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/044e8e6afbffda7748e3ed18da63a01dd1ad82": "bf417ae0a92f5948614fef8267f22b63",
".git/objects/b8/07e7023c360f749b588c6c4ca8b4d934a08b4f": "468a683945c2443be787b9f232ac1544",
".git/objects/b9/0f818c04211b3a311a76bd1819651543814db4": "ba921a15f6eaeabf17feddfc6b3bb67a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/0e99cc14c2bda7cdfce3103d6809f301658544": "04e89566f17663ef07d4016c7241e2fa",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/5c180f835736d4a1881337b471a2bc46957031": "55d7724df472fdec4323adbae3f78000",
".git/objects/c0/87d19b8e320518b6315f55dac7999a4403a12d": "47827849aeb45664cdfbc283f8bd04e9",
".git/objects/c0/b2516e486497bbf46985831b97610fafb8f92f": "12267a18fa2919ef956826b34f9c591a",
".git/objects/c2/5580fc7c31377f7dc46f21f3980bc2fd57587b": "20c15803499ee86dce0de423b5f8e741",
".git/objects/c3/c42a4d72f256f45e57f87723488377e151ffe4": "c86c9dcc2152ff2a26735fb4e240e968",
".git/objects/c4/05ca975aae5f1ee18d06a9060e06e05f4329b5": "685d867b868f229348e02aa6fd30fa98",
".git/objects/c5/dfdb7679899c895750b30e858988c4e194970f": "3fb85d43ae8865a371ac8485e2715610",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/05ad839a1957a994008904500eb38fe7b7fb0a": "caed1a05d4607d29972101aa9adfb749",
".git/objects/c9/8b68ac2df0c9934896f571a8ddd9612e9fd379": "7c99efcc016912f7743c49525a7312f1",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/9b99278e9124850bfa66de5fdc1e18151fb2ed": "14cfaa02416854c0b991faca3135d9cb",
".git/objects/cb/f44db93188aa3f540453461f19b1f355e8f7f8": "f066f0813d8c013a38687ef90bc43207",
".git/objects/cc/5f85671f0c86386f86f987a99991eb43a599e4": "04720e87ad9dbe98abf13cb5da2d446f",
".git/objects/cc/fbc7db999b7d83cee036d99582bf258ef54f1d": "37db9e7637c1b9da1e244fb08282b6c1",
".git/objects/cd/120db6341e430bc98b6fb76a80590939e265e5": "f258b22d1213b6a4dd7f613e42a5b97b",
".git/objects/d0/06b619edc952137ab7c1fccd840cabe1a432d7": "8c68d09eb4f3feadcce5fb41d68a18b5",
".git/objects/d0/59ae608cc57266b9ee73dbfbfc0ddb28adf16c": "53ce3559d102a7043d944d307a098199",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3bca67d575617375e8c50ac32bf3abbff85782": "30dbcca43e686c68befdaa9e8acb7e9f",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a8fbd9748a62600524ef532b8fd841915b613a": "958323b3649b649694075882cbc27c22",
".git/objects/da/4e69eb74064e85133a44dcf950e13e9643e90a": "9a3de0ef18c0cea0e1a181abab6fd301",
".git/objects/dd/a499add4ed714de5057db9af89638b1ad7598d": "0aaf49ff1b82a29ef16623efb71f9aaa",
".git/objects/df/0db57f4452aa7fe5d1c8e279e0941055cf5eef": "7721b0e997603fd9f9a7b832a90413c0",
".git/objects/df/c7e2fc59dfbfaf577dc2777f6bb910a6d04d1f": "1a3069e2a129bcd83854f2d53efd65b2",
".git/objects/e0/20bc20f1f35988d3fd3cfdf71176d72e26a6ed": "f765cc10a1d75417967d7fbcbcedf161",
".git/objects/e1/4d341e411053653ed33371ba6273ce7b18d288": "5a9018a503f3b2aa98429c91ad524768",
".git/objects/e1/ad877443941fa3a8f985741f81028dcb58e0db": "0f6413570f3d68e0472b4e0dd79065f4",
".git/objects/e3/35e8f7fe37571035b0f38e5a6b0885e78c4b88": "be2a32295f298a7de351bb4ab6bcfbd6",
".git/objects/e6/cf3bc0b769ee92043d6f940b8a1d17c8b54821": "ccbbf089b883a2e9068ef1793da991f2",
".git/objects/e7/16b8302b2599f0c2286fd648d52ddd51895f7f": "59078529248ee1631a3e2b9d4746abaf",
".git/objects/e8/c4b6871da3a6321d8b953626d786c90b604021": "52fd58ce5ac5203ec84e0ada7b76a4ab",
".git/objects/e9/4f0362e19b38042f9c65e7709d78b3ed5d790a": "b2e96f4a87c1a0bc45a2072d305de810",
".git/objects/ea/e7187cbffda3aba08dbea9739a80d1935620d9": "eb0e786e878589cb3ae318d5a121eeca",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1d42979a90c7295481d5705a6a30a9890377c6": "0fc6dc5bd74168b3bb9de2a6a187d737",
".git/objects/ef/ddc83415f34cb2ca66704126323cca45d43981": "b656859c40b233f704bed382b7882445",
".git/objects/ef/fb90ebd231835245f62c33438bf9e7bd7589ca": "8217e9665482209b419512a33f13bb6e",
".git/objects/f0/f5ad8c496d45420427c122290ea983d6808624": "cf0007281ee381ee848443f5c04fdde2",
".git/objects/f1/03fac58b3cb932ad6a61d46ff7b4518dd60d06": "f8a85e6942907206c535bc972e895d46",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ceabaefc2f8068e669143a899d5623292221cc": "dd9618dc464cafb1744873afdd78797d",
".git/objects/f4/8fa9d1ed64ad5b421492adc79becb634332add": "f162e49f0e0dc1de912c5b83e315ff8b",
".git/objects/f5/3b88b86aab3bc5792858b51ecf07ec2193d732": "83a47f4b5c7d44d3f8e6832137e74122",
".git/objects/f5/87974b968d27cdfa0275698faf7ecf368d72b0": "d1bf0bf6f1614848b6f422cae6010fc3",
".git/objects/f6/0d92906fa431eda650db845d18ebb73c4f3107": "82bdf57e4a7bf8cf546a041023a6dac1",
".git/objects/f8/69a6c8598f1e7d8aa19a8173d219f845eaf089": "08599f188bccc32299f3e01d40e6bc76",
".git/objects/fb/d9f22a0e59fae3b28da67240e9710d45aca3c2": "96749c10ee9ab0ca59480d06ac0af926",
".git/objects/fc/eca8f372713da7c01b8f383662564312e5440e": "50450d23b4a2105b8840a7bd0f1614e1",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "ddca0dce8494a662c7b5f78eb35ac321",
".git/refs/heads/main": "6af376b166b3be1c02c097f54085d011",
".git/refs/remotes/origin/main": "6af376b166b3be1c02c097f54085d011",
"assets/AssetManifest.bin": "fd0f2d7d00bc3b28510c343a75449d36",
"assets/AssetManifest.bin.json": "d1402dc961adf8569c8a1d5557c1259f",
"assets/AssetManifest.json": "95935c60c0aca43c5d04c6c320e1205a",
"assets/assets/components/contact/horizontal-texture.png": "234c3d5858caf2f58ce231ce03e87c3f",
"assets/assets/components/contact/vertical-texture.png": "98575e3746c76f4cae0327b57a0c72dd",
"assets/assets/components/experience/abstract-right.png": "e53a76485b04ba726c7252dc8a8c8631",
"assets/assets/components/mouse-down.json": "6b5a41c5dbbcf6607810e56fa6269fb2",
"assets/assets/components/presentation/highquality.jpg": "a0d58a8c8b50164305fdebc3bfc0227a",
"assets/assets/components/presentation/presentation-mobile.png": "b8cdc2046d5553c09eddfb3332bd975d",
"assets/assets/components/presentation/presentation-web.png": "1da59122f3c4f4b8935f0b3334594f13",
"assets/assets/components/presentation/texture-background.png": "0ffeabc6308fff5d3c8efcbeecc6904d",
"assets/assets/components/presentation/texture-large.png": "1bab8b08e59a241f27daa4d29426070f",
"assets/assets/components/projects/large-abstract.png": "46e96326822e664028752807b6dd33f3",
"assets/assets/components/projects/mobile-abstract.png": "cf04644c849bd10c116013f560da5e05",
"assets/assets/components/projects/Mockup.png": "2102dd4f82bd4a021158ffb79efb6bc9",
"assets/assets/components/social/abstract-large.png": "dfbe6bc03a8f77df5051bf23653d907f",
"assets/assets/components/social/abstract.png": "2525865b904aa20c6ab9fd2e03ce9bf7",
"assets/assets/components/social/discord.svg": "cd4730e2cf392ceee9a22ea5a78ecd16",
"assets/assets/components/social/github.svg": "651ff0f4d9545f268088b2dc9edd62b5",
"assets/assets/components/social/instagram.svg": "beb71dcb570100d531b28023eb3487ad",
"assets/assets/components/social/linkedin.svg": "8564ddd78e336ea070658ab1a25e54c1",
"assets/assets/components/social/mail.svg": "2febb78815891ce15419c9e10d0a9df1",
"assets/assets/components/social/telegram-svgrepo-com.svg": "255a132b08b695a7c690b3e08aad5520",
"assets/assets/components/splash/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/developer.png": "61055a2b0d1444b9012bf8b5933a4ca7",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/profile.jpg": "6133da25825616a8c4ba3d6c920460a4",
"assets/FontManifest.json": "9c7cde91890bd8da826e02a773be9bab",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "2640d54c1837a86a5cfe7892e987539a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "088d57bc5172ba21afd70fcd83429955",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "88c51575a5ff595105f0c6643f0aca5d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5f45c053b610d03a2a70558a345d18d5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "36b5f89e77dc54b9def461fd7eb7ccf0",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "fdbb7eca5e975e83c2459c24593cb0c3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e07af7619fb04f9c09bb98edb7ffd798",
"/": "e07af7619fb04f9c09bb98edb7ffd798",
"main.dart.js": "150192a633e41733348a546c0535df29",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
