import { GPSSystem } from '../util/gps'

export const MeridianSystem = {
  // This GPS list is exported from ingame, using a combination of `!nexus getsectors true` and `!gps` commands.
  // Then run through `parseGPSList` to convert it to a format that can be used here.
  // Some manual tweaks are made as well, marking zone speed limits (by specifying instance names)
  Hel: GPSSystem.fromString(`
    GPS:Hel:16384.50:16384.50:16384.50:#FF40EC34:Bodies:
    GPS:Polemos - (R:500km):231072.50:31072.50:2131072.50:#FFFFFF00:Sectors:
    GPS:Polemos:231072.50:31072.50:2131072.50:#FFFFFF00:Bodies:
    GPS:Caerus:-2634463.50:65536.50:-434463.50:#FF40EC34:Bodies:
    GPS:Thanatos:331072.50:131072.50:-6368927.50:#FF40EC34:Bodies:
    GPS:Object-111801522 (Kimi):2702048.50:-297951.50:-947951.50:#FF40EC34:Bodies:
    GPS:Deimos:965536.50:65536.50:2415536.50:#FF40EC34:Bodies:
    GPS:Geras:2331072.50:11072.50:-18927.50:#FF40EC34:Bodies:
    GPS:Geras - (R:500km):2331072.50:11072.50:-18927.50:#FF40EC34:Sectors:
    GPS:Kuros:-2368927.50:31072.50:531072.50:#FF40EC34:Bodies:
    GPS:Kuros - (R:500km):-2368927.50:31072.50:531072.50:#FF40EC34:Sectors:
    GPS:CCAS Tripoli SLC:165635:7284:2195716:#FFF19F75:NPC Stations:
    GPS:CCAS Nairobi SLC:297432:50771:2065996:#FFF19F75:NPC Stations:
    GPS:ENCORP DuPont Transit:-2422618:-20256:598156:#FF757FF1:NPC Stations:
    GPS:ENCORP Vanderbilt Station:-2335929:70355:444812:#FF757FF1:NPC Stations:
    GPS:CSILLA Vekan Gatehold:2247864:33592:6981:#FFFF6A6A:NPC Stations:
    GPS:CSILLA Regional Landing:2415608:-19793:-17159:#FFFF6A6A:NPC Stations:
  `),
}
