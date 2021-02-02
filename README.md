# team
    Product owner: Filip Baginski
    System architecture and design: Jan Mikos
    Back-end: Grzegorz Matyja
    Front-end: we are waiting for you <3

# key-words
    microservice architecture, social media, geo-tagging, privacy, quality content, local events

# technologies
    JAVA, Spring, C#, .NET, DOCKER, PGSQL, PLPGSQL, PYTHON, TYPE SCRIPT, JSF, SMALL-STEP, OMEMO, CENTOS, BASH, LUCID CHART

# about project
    Zlapka is final project in our one year bootcamp - Codecool - curiculum. This time we are challenging ouerselves
    to use all obtained skills in creating multi-language (Java EE, plpgsql, C#, Type Script) project based on 
    microservice architecture working in agile methodology. In this approach we are trying to maximize:
    - security
    - usability 
    - modularity
    - interchangeability

# component repositories:
    Database (menages shared database, needs update - sheduled for 23 XI sprint) [python, plpgsql, pgsql]:
        github.com/pirat77/zlapka_db
    Event component (just component structure would be extended in first december sprint) [JAVA EE, Spring]:
        github.com/pirat77/ZlapkaEventComponent
    Localization component (menaging venues) [Java EE, Spring]:
        https://github.com/Grelory/ZlapkaLocalizationComponent
    User component[c#, .NET Core]:
	https://github.com/baginski95/zlapka-user-API2
	documentation: https://app.swaggerhub.com/apis/baginski95/UserAPI/v1
	
    Other components (to be created):
        -auth server (menaging permissions and user verification)
        -user component (menaging user data)
        -scoring component (menaging scoring algorithm meant for maximalization of content quality)
        -ephemeral component (menaging events outside of planet earth scope)
        -group boards component (menaging message boards)
        -chat relay component (menaging secure end to end encrypted p2p communication beetween users)
        -admin panel (menaging admin actions, fully independent from other components)
        -mod panel (menaging moderator actions, fully independent from other comopnents)
        -front end (decision postponed, in this architecture we are able to deliver multiple front-end interfaces)
        
# zlapka-main architecture
    Component diagram:
![ZlapkaComponentDiagram.png](/media/ZlapkaComponentDiagram.png)
# authentication
    authentication protocol use case example:
![authentication.png](/media/authentication.png)

# whose for? 
    Zlapka aims to deliver efficient tool for local area networking. Our main area of interest are middle size events
    ( 10-100 participants ), held in neighbourhood environment. Who is our target user? It could by anyone :) eg.:
    - local owners
    - event organizers
    - self promoting artist
    - trendsetters / influncers
    - people looking for casual events in their spare time
    - people looking for mates with similiar interest
    - people who are just bored
    - people looking for part time job
    - people having strange hobby
    - animators
    - sport event organizers (also extreme sports crews)
    - local governments (menaging cultural events)
    - families looking for interesting activities
    
# ROADMAP:
    [SPRINT NUMBER]     [TIME]              [TASKS]
    0                                       we created database and some component shells in previous projects
    1                   8 - 21 XI 2020      dreaming stage, artifacts setup, interface separation, responsibility claim
    2                   23 XI - 5 XII 2020  documentation, data base update, view definition, tdd test preparation
    3                   6 - 20 XII 2020     event component, user component, google maps integration
    
    2021:
    
    4                                       Scoring, ephemeral events
    5                                       groups, boards, chat
    6                                       admin panel, mod panel, log repository
    7                                       secuirity testing
    8                                       front end
    
    Xx                                      test, measure, plan, update feedback loop
    
    Sprng - early summer 2021:              Release
