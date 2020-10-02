const channelsMock = [
  {
    name: "TV Globo",
    pageIdentifier: "globo",
    logo:
      "https://s2.glbimg.com/UvWm9Ihlz9aF7RuRETNQMw8xVKg=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/9Wy1I7Dz4-R6xhNVpPqTLzd0mME=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/V/q/33CD65RVK44W5BSLbx1g/rede-globo.png",
    logoSelected:
      "https://s2.glbimg.com/nBySLGbDfnUhx0uEPTh_dbEZLVk=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/9Wy1I7Dz4-R6xhNVpPqTLzd0mME=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/V/q/33CD65RVK44W5BSLbx1g/rede-globo.png",
  },
  {
    name: "Multishow",
    pageIdentifier: "multishow",
    logo:
      "https://s2.glbimg.com/b-u1sq3ZrYMgQilGNb85CTGeMUM=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/g34yujHEeJF1i2_8byG7sAg2G_s=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/8/s/ahzcQqSMyCbetR0rp66A/multishow.png",
    logoSelected:
      "https://s2.glbimg.com/1BK-jAnSfP3GPCnBQ7K9stGti6w=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/g34yujHEeJF1i2_8byG7sAg2G_s=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/8/s/ahzcQqSMyCbetR0rp66A/multishow.png",
  },
  {
    name: "Globonews",
    pageIdentifier: "globonews",
    logo:
      "https://s2.glbimg.com/82RPZjobVs5qdC8ieSRp2a-GMUM=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/KOq18UNHYYB3G_729P5Fko2vAmc=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/O/n/nslsdxRamJvQ2LydUB7A/globonews.png",
    logoSelected:
      "https://s2.glbimg.com/_OQrwmIXdmvgkqDm_sNowC9pc5k=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/KOq18UNHYYB3G_729P5Fko2vAmc=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/O/n/nslsdxRamJvQ2LydUB7A/globonews.png",
  },
  {
    name: "SporTV",
    pageIdentifier: "sportv",
    logo:
      "https://s2.glbimg.com/tBG8twsV_QvdxwCGWEEkGXUNZI0=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/h0SPqqBQdgtIB3WmJicsrGrhxKE=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/G/2/cQfAONSNyljllSSevXBw/sportv.png",
    logoSelected:
      "https://s2.glbimg.com/Yrp_Qog7own0IQt5xy6izwpa7Jw=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/h0SPqqBQdgtIB3WmJicsrGrhxKE=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/G/2/cQfAONSNyljllSSevXBw/sportv.png",
  },
  {
    name: "GNT",
    pageIdentifier: "gnt",
    logo:
      "https://s2.glbimg.com/n1MVmkH5BMm_-JGxhqOSDO1wH3w=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/IKfzFKYdfrZK1qO7iUFvFhvLA7o=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/x/3/r5YJuBSW2pA3qyPgMpdg/gnt.png",
    logoSelected:
      "https://s2.glbimg.com/ORSFDo42pn8w47QZVP1NmYqO_v0=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/IKfzFKYdfrZK1qO7iUFvFhvLA7o=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/x/3/r5YJuBSW2pA3qyPgMpdg/gnt.png",
  },
  {
    name: "VIVA",
    pageIdentifier: "viva",
    logo:
      "https://s2.glbimg.com/0osJyJkClaoo7Qg8Xe730TV2vgQ=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/QMVmuENaLpUtzUx7eIcRyoR952s=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/T/R/Z2rgeLRvS0ptiXCTc30A/viva.png",
    logoSelected:
      "https://s2.glbimg.com/vgzgZiCSt1QxPLXvC468rCCRGOI=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/QMVmuENaLpUtzUx7eIcRyoR952s=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/T/R/Z2rgeLRvS0ptiXCTc30A/viva.png",
  },
  {
    name: "Gloob",
    pageIdentifier: "gloob",
    logo:
      "https://s2.glbimg.com/unwJ0Z0TOmdZmpaLX_E7L1cis4k=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/sCCJBX_JiZwBCkPD-yHbEsbuD_k=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/K/G/oSToHqS02AR7LvfQUobQ/gloob.png",
    logoSelected:
      "https://s2.glbimg.com/tUONUCHS4q0e509LHlxejz_f_Ek=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/sCCJBX_JiZwBCkPD-yHbEsbuD_k=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/K/G/oSToHqS02AR7LvfQUobQ/gloob.png",
  },
  {
    name: "Gloobinho",
    pageIdentifier: "gloobinho",
    logo:
      "https://s2.glbimg.com/OhKgAqZwNPGhCj28EKbGJv8BGBQ=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/uYAQ7NMha-qXhSdSgxx2klicOyg=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/J/0/d75t6WRVayG0gMFW4VZw/gloobinho.png",
    logoSelected:
      "https://s2.glbimg.com/YwbKujqyNw2tRWGkcaTbicowbkM=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/uYAQ7NMha-qXhSdSgxx2klicOyg=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/J/0/d75t6WRVayG0gMFW4VZw/gloobinho.png",
  },
  {
    name: "Megapix",
    pageIdentifier: "megapix",
    logo:
      "https://s2.glbimg.com/UlfOu45I5bj3ScD0obyBTk0i1-o=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/Py8ncG4PKmX0tp6OOt4oyTDKDC0=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/A/J/Rb8aiiRxu8t7tD1WAJBw/megapix.png",
    logoSelected:
      "https://s2.glbimg.com/avUK9oo351XGxmaAH0pJPTY24ns=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/Py8ncG4PKmX0tp6OOt4oyTDKDC0=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/A/J/Rb8aiiRxu8t7tD1WAJBw/megapix.png",
  },
  {
    name: "Universal",
    pageIdentifier: "universal",
    logo:
      "https://s2.glbimg.com/PHwmoJIvNnX_-CnqnssNWoI-qTo=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/mQV6bTBgyuEcM_cO7kyzHr8n2kY=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/4/R/12QLQ3RbmHl3MOhXEfMA/logounivgplay.png",
    logoSelected:
      "https://s2.glbimg.com/6gsLGViFQwKsgvkC7TXixUqqyyQ=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/mQV6bTBgyuEcM_cO7kyzHr8n2kY=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/4/R/12QLQ3RbmHl3MOhXEfMA/logounivgplay.png",
  },
  {
    name: "Canal Brasil",
    pageIdentifier: "canal-brasil",
    logo:
      "https://s2.glbimg.com/uDMw-ByDOe1O3wLheZ6sa8PRzn0=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/Y-54NyA066gt1AY92CLbfM3TCms=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/0/R/WYMXudQnyVugUY7hTswA/canal-brasil.png",
    logoSelected:
      "https://s2.glbimg.com/yo0P8k_C9vmHoSuvBtOXUSscLEY=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/Y-54NyA066gt1AY92CLbfM3TCms=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/0/R/WYMXudQnyVugUY7hTswA/canal-brasil.png",
  },
  {
    name: "Canal Off",
    pageIdentifier: "canal-off",
    logo:
      "https://s2.glbimg.com/hKCRGsCJbKjxsnY7v02nV_iAIV8=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/dn9HO0lvymB8HisbzCNko5vfMIk=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/L/T/1War4BROSAV6OI1NU6hQ/off.png",
    logoSelected:
      "https://s2.glbimg.com/qBl_1KNkTx3Xa2RuBveF_Z2cKhs=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/dn9HO0lvymB8HisbzCNko5vfMIk=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/L/T/1War4BROSAV6OI1NU6hQ/off.png",
  },
  {
    name: "Bis",
    pageIdentifier: "bis",
    logo:
      "https://s2.glbimg.com/TwPqnonZYLwsYVoO-PFLI6DyIdI=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/f2FK5vbo7Q23N-ce440lsehJsyA=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/y/t/0t6pgkR66StvweRNJwTw/bis.png",
    logoSelected:
      "https://s2.glbimg.com/fTUsgWP7sZDsWYiqKAruwy_w9t0=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/f2FK5vbo7Q23N-ce440lsehJsyA=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/y/t/0t6pgkR66StvweRNJwTw/bis.png",
  },
  {
    name: "Mais Globosat",
    pageIdentifier: "mais-globosat",
    logo:
      "https://s2.glbimg.com/4dwcc7GshnFVyj0VhYiV_zygwjk=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/0DQRUAaKOJRVZluy58LDEjAxKzw=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/g/T/1ZAIzeRgGwPh1VVp0bmA/mais-gsat.png",
    logoSelected:
      "https://s2.glbimg.com/cOAjrSflsVGTv7hnzNbyvFfxJDs=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/0DQRUAaKOJRVZluy58LDEjAxKzw=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/g/T/1ZAIzeRgGwPh1VVp0bmA/mais-gsat.png",
  },
  {
    name: "Futura",
    pageIdentifier: "futura",
    logo:
      "https://s2.glbimg.com/EcqF5EhOzzHnYJ78qKr_tJleC6Q=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/A9iD_YPNKLhgwk_f7uU7_c2Z2Io=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/t/h/Jd3WjMRK6RoLwzNZLz3Q/futura.png",
    logoSelected:
      "https://s2.glbimg.com/9WDtW7oXVYo3Hc2P1DMlby2bLHM=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/A9iD_YPNKLhgwk_f7uU7_c2Z2Io=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/t/h/Jd3WjMRK6RoLwzNZLz3Q/futura.png",
  },
  {
    name: "Premiere",
    pageIdentifier: "premiere",
    logo:
      "https://s2.glbimg.com/D0b-QF8HsvBohKuQmwfDxG4aiNk=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/_p3wqp8ZlDV3wkLnue-5a3wBJ5k=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/m/g/T2qATAT4CokCPHtIgWnA/premiere.png",
    logoSelected:
      "https://s2.glbimg.com/GwEV0_GisLaz9nN66ypgkzuwWUs=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/_p3wqp8ZlDV3wkLnue-5a3wBJ5k=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/m/g/T2qATAT4CokCPHtIgWnA/premiere.png",
  },
  {
    name: "Combate",
    pageIdentifier: "combate",
    logo:
      "https://s2.glbimg.com/49vLv-0ed2sRELowizpW_crVWfo=/fit-in/168x84/filters:colorize(100,100,100,AAAAAA)/https://s2.glbimg.com/ax1eJOtJHmUMGghYC1UjiRmSPWo=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/6/y/DzgbWKRTaMwJFuGyxg5A/combate.png",
    logoSelected:
      "https://s2.glbimg.com/r3XJiTgUanWkIWEm5z9ZG3zHl3I=/fit-in/168x84/filters:colorize(100,100,100,454545)/https://s2.glbimg.com/ax1eJOtJHmUMGghYC1UjiRmSPWo=/trim/filters:fill(transparent,false)/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/6/y/DzgbWKRTaMwJFuGyxg5A/combate.png",
  },
];

export {
    channelsMock
}
