# nplusplus_http_proxy
nodejs proxy server to dig up some of the queries used by npp game

Windows 10 machine, npp steam version. node v10.15.2

Sniffing the traffic using wireshark revealed that npp used TLS v1.2 to handle it's traffic, but if you hexedit
npp.dll found on `C:\Program Files (x86)\Steam\steamapps\common\N++` and replace `https://dojo.nplusplus.ninja` with `http://localhost:8124       ` (including the padding nuls') you can check what calls npp does to that server, and what server responses it gets.

`node server.js >> logdump` launches the server and puts all the output on the `logdump` file.

you can replicate the urls on a browser, some examples:

`https://dojo.nplusplus.ninja/prod/steam/get_scores?app_id=&steam_id=76561198031272062&user_id=&steam_auth=&level_id=90&qt=0`

`https://dojo.nplusplus.ninja/prod/steam/query_levels?app_id=230270&steam_id=76561198025195712&user_id=162041&steam_auth=&qt=7&mode=0&page=0` (returns a binary, probably including the maps themselfs)

`https://dojo.nplusplus.ninja/prod/steam/search/levels?app_id=230270&steam_id=76561198025195712&user_id=162041&steam_auth=&search=enr&mode=0&page=0`

`https://dojo.nplusplus.ninja/prod/steam/submit_score?app_id=230270&steam_id=76561198025195712&user_id=162041&steam_auth=
0` (this in particular needs a POST form hijack to submit your replay, this is probably how Jey et al swindle their fake scores on the leaderboard, please don't abuse, it's lame for everyone especially yourself).
