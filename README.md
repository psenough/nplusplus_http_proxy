# nplusplus_http_proxy
nodejs proxy server to dig up some of the queries used by npp game

Windows 10 machine, npp steam version. node v10.15.2

Sniffing the traffic using wireshark revealed that npp used TLS v1.2 to handle it's traffic, but if you hexedit
npp.dll found on `C:\Program Files (x86)\Steam\steamapps\common\N++` and replace `https://dojo.nplusplus.ninja` with `http://localhost:8124       ` (including the padding nuls' or you'll get an error) you can now check what calls npp does to the server, and what server responds back.

`node server.js >> logdump` launches the local proxy server and tells it to place all the output to the `logdump` file.

you can call back the found urls on a browser afterwards.

here are some examples for reference, you'll need to include your own user_id and steam_auth to have it working.

`https://dojo.nplusplus.ninja/prod/steam/get_scores?app_id=230270&steam_id=76561198031272062&user_id=&steam_auth=&level_id=90&qt=0` (qt 0 global, qt 1 friends, qt 2 yours)

`https://dojo.nplusplus.ninja/prod/steam/query_levels?app_id=230270&steam_id=76561198025195712&user_id=&steam_auth=&qt=7&mode=0&page=0` (returns a binary, probably including the maps themselfs; qt is the browser type tab (best, new, hard, etc))

`https://dojo.nplusplus.ninja/prod/steam/search/levels?app_id=230270&steam_id=76561198025195712&user_id=&steam_auth=&search=enr&mode=0&page=0` (lists all levels with the string enr; mode 0 solo, mode 1 co-op, mode 2 race)

`https://dojo.nplusplus.ninja/prod/steam/submit_score?app_id=230270&steam_id=76561198025195712&user_id=162041&steam_auth=
0` (this in particular needs a POST form hijack to submit your replay, this is probably how Jey et al swindle their fake scores on the leaderboard, please don't abuse, it's lame for everyone especially yourself).
