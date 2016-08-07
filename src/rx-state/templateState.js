const templateState = {
    session: {
        render: null,
        token: null,
        mode: null, // ADMIN | VISITOR | DEMO | TRY
        issueFromServer: null,
        stateFromServer: null
    },
    setup:{
        id: 14,
        issue: 0,
        language: 'RUS', // ENG | RUS | UKR
        enabled: true,
        visibility: true,
        pattern: {
            fontName: null,
            fontSize: 3, // 1 | 2 | 3 | 4
            colorSet: 1,
            corner: 1,
            arror: 1
        },
        hintsSingle: [
            {
                id: 1,
                type: 'NORMAL', // NORMAL | POP-UP
                groupVisitor: null,
                selector: '#elementId',
                range: {
                    enabled: true,
                    dateBegin: '14.03.1982',
                    dateEnd: '01.01.2016'
                },
                regularity: {
                    value: 'X', // X | D | W | M | Y
                    lastShow: '01.01.2016'
                },
                enabled: true,
                usedInDemo: false,
                delay: 1000,
                status: 'WAIT' // WAIT | SHOW | DONE

            }
        ],
        hintsChain: [
            {
                id: 14,
                title: "My test chain",
                enabled: true,
                usedInDemo: false,
                groupVisitor: null,
                startElement: '#elementId',
                range: {
                    enabled: true,
                    dateBegin: '14.03.1982',
                    dateEnd: '01.01.2016'
                },
                regularity: {
                    value: 'X', // X | D | W | M | Y
                    lastShow: '01.01.2016'
                },
                list: [{},{},{}],
                beginAfter: '2014-11-31 12-30-00',
                delay: 1000
            }
        ]
    }
};

export default templateState;