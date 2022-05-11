export default {
    key: {
        ACCESS_TOKEN: 'total-wallet-access-token',
        TOKEN: 'accessToken'
    },
    url: {
        ONLOGIN: '/',
        LOGINFAIL: '/#/signIn',
        ONLOGOUT: '/signIn',
        LOGIN: 'auth-api/login/manager?id=',
        LOGOUT: 'auth-api/logout/manager',
        GETIP: 'https://api.ipify.org?format=json',
        ETHERSCANA: 'https://etherscan.io/address/',
        ETHERSCANH: 'https://etherscan.io/tx/',
        MENU_LIST: 'admin-api/menuList',
        MENU_PATH: 'admin-api/menuPath',
        MEMBER_INFO_LIST: 'admin-api/memberInfo/getMemberBaseInfoList?page=',
        MEMBER_LIMIT: 'admin-api/memberInfo/getMemberLimitInfo/',
        MEMBER_LIMIT_BLACK: 'admin-api/memberInfo/setMemberLimitBlcklRgstr',
        MEMBER_LIMIT_LOGIN: 'admin-api/memberInfo/setMemberLoginLimit',
        MEMBER_LIMIT_SERVICE: 'admin-api/memberInfo/setMemberServiceLimit',
        MEMBER_LIMIT_WITHDRAW: 'admin-api/memberInfo/setMemberWithdrawLimit',
        MEMBER_RESET_LOGIN_COUNT: 'admin-api/memberInfo/setMemberLoginErrorCntReset',
        MEMBER_NICE_LIST: 'admin-api/member/getMemberNiceCertList?page=',
        MEMBER_USEB_LIST: 'admin-api/member/getMemberUsebList?page=',
        MEMBER_USEB_RESET: 'admin-api/member/clearUsebData/',
        MEMBER_USEB_DETAIL: 'admin-api/member/getMemberUseb/',
        OPERATION_BANNER_LIST: 'admin-api/banner/getBannerList?page=',
        OPERATION_BANNER_DETAIL: 'admin-api/banner/getBanner/',
        OPERATION_BANNER_CRUD: 'admin-api/banner/setBanner',
        OPERATION_BANNER_DEL: 'admin-api/banner/deleteBanner?cbIdx=',
        OPERATION_NOTICE_LIST: 'admin-api/notice/getNoticeList?page=',
        OPERATION_NOTICE_DETAIL: 'admin-api/notice/getNotice/',
        OPERATION_NOTICE_CRUD: 'admin-api/notice/setNotice',
        OPERATION_NOTICE_DEL: 'admin-api/notice/deleteNotice?cnIdx=',
        OPERATION_POPUP_LIST: 'admin-api/popup/getPopupList?page=',
        OPERATION_POPUP_DETAIL: 'admin-api/popup/getPopup/',
        OPERATION_POPUP_CRUD: 'admin-api/popup/setPopup',
        OPERATION_POPUP_DEL: 'admin-api/popup/deletePopup?cpIdx=',
        OPERATION_MSGTEMPLATE_LIST: 'admin-api/push/getPushTemplateList?page=',
        OPERATION_MSGTEMPLATE_DETAIL: 'admin-api/push/getPushTemplate/',
        OPERATION_MSGTEMPLATE_CRUD: 'admin-api/push/setPushTemplate/',
        OPERATION_MSGTEMPLATE_DEL: 'admin-api/push/deletePushTemplate?cptIdx=',
        OPERATION_EMAILTEMPLATE_LIST: 'admin-api/email/getEmailTemplateList?page=',
        OPERATION_EMAILTEMPLATE_DETAIL: 'admin-api/email/getEmailTemplate/',
        OPERATION_EMAILTEMPLATE_CRUD: 'admin-api/email/setEmailTemplate/',
        OPERATION_EMAILTEMPLATE_DEL: 'admin-api/email/deleteEmailTemplate?cetIdx=',
        OPERATION_EMAILTRANSMISION_LIST: 'admin-api/email/getEmailSendingList?page=',
        EXCHANGE_LIST: 'admin-api/exchange/getExchangeList?page=',
        EXCHANGE_DETAIL: 'admin-api/exchange/getExchange/',
        EXCHANGE_CRUD: 'admin-api/exchange/setExchange',
        EXCHANGE_DELETE: 'admin-api/exchange/deleteExchange?meIdx=',
    },
    status: {
        CODE: '0',
        ERROR_CODE: 'E0004',
    },
    data: {
        MENUPATH: 'menu_path',
        MENULIST: 'menu_list',
        TOPDROP: [
            {
                name: '82',
                code: 'KR'
            },
            {
                name: "86",
                code: "CN",
            },
            {
                name: "33",
                code: "FR",
            },
            {
                name: "44",
                code: "GB",
            },
            {
                name: "49",
                code: "DE",
            }
        ],
        USEB: [
            {
                name: "이메일",
                code: "mbEmail",
            },
            {
                name: "이름",
                code: "mbName",
            },
            {
                name: "핸드폰",
                code: "mbPhone",
            },
        ],
        PROFILE: [
            {
                name: "이메일",
                code: "mbEmail",
            },
            {
                name: "이름",
                code: "mbName"
            },
            {
                name: "연락처",
                code: "mbPhone",
            },
        ],
        NICE: [
            {
                name: "이름",
                code: "mnName",
            },
            {
                name: "휴대폰번호",
                code: "mnPhone",
            }
        ],
        ADDDOCUMENTS: [
            {
                name: "UID",
                code: "add_uid",
            },
            {
                name: "파일명",
                code: "add_file_name",
            }
        ],
        CONINMARKET: [
            {
                name: "노출순서",
                code: "cp_exposure_order"
            },
            {
                name: "심볼명",
                code: "cp_symbol"
            },
            {
                name: "가격",
                code: "cp_price"
            }
        ],
        POPUP: [
            {
                name: "상태",
                code: "cpState"
            },
            {
                name: "언어",
                code: "cpLanguage"
            },
            {
                name: "제목",
                code: "cpTitle"
            },
            {
                name: "내용",
                code: "cpContents"
            },
            {
                name: "타입",
                code: "cpType"
            }
        ],
        POPUPSETTING: {
            STATUS: [
                {
                    name: "사용",
                    code: "0"
                },
                {
                    name: "미사용",
                    code: "1"
                }
            ],
            TYPE: [
                {
                    name: "Image",
                    code: "Image"
                },
                {
                    name: "Text",
                    code: "text"
                }
            ],
            LANGUAGE: [
                {
                    name: "KR",
                    code: "KR"
                },
                {
                    name: "EN",
                    code: "EN"
                },
                {
                    name: "JR",
                    code: "JR"
                }
            ],
            ORDER: [
                {
                    name: '1',
                    code: '1'
                },
                {
                    name: '2',
                    code: '2'
                },
                {
                    name: '3',
                    code: '3'
                },
                {
                    name: '4',
                    code: '4'
                }
            ],
            OPTION: [
                {
                    name: '인 앱 화면 이동',
                    code: '0'
                },
                {
                    name: '인 앱 화면 이동 안함',
                    code: '1'
                }
            ],
        },
        MSG: {
            TEMPLATE: [
                {
                    name: '타입',
                    code: 'cptType'
                },
                {
                    name: '언어',
                    code: 'cptLanguage'
                },
                {
                    name: '제목',
                    code: 'cptTitle'
                },
                {
                    name: '내용',
                    code: 'cptContents'
                },

            ],
        },
        EMAIL: {
            TEMPLATE: [
                {
                    name: '타입',
                    code: 'cetType'
                },
                {
                    name: '언어',
                    code: 'cetLanguage'
                },
                {
                    name: '제목',
                    code: 'cetTitle'
                },
                {
                    name: '내용',
                    code: 'cetContents'
                },
            ],
            TRANSCAT: [
                {
                    name: '상태',
                    code: 'cesStatus',
                },
                {
                    name: '타입',
                    code: 'cesType',
                },
                {
                    name: '제목',
                    code: 'cesTitle',
                },
                {
                    name: '내용     ',
                    code: 'cesTitle',
                }
            ]
        },
        NOTICE: [
            {
                name: "상태",
                code: "cnState"
            },
            {
                name: "언어",
                code: "cnLanguage"
            },
            {
                name: "제목",
                code: "cnTitle"
            },
            {
                name: "내용",
                code: "cnContents"
            }
        ],
        BANNER: [
            {
                name: "상태",
                code: "cbState",
            },
            {
                name: "분류",
                code: "cbClsfc",
            },
            {
                name: "언어",
                code: "cbLanguage",
            },
            {
                name: "이미지링크",
                code: "cbImageUrl",
            },
        ],
        DEPOSIT: [
            {
                name: "UID",
                code: "drMbUid",
            },
            {
                name: "이메일",
                code: "email",
            },
            {
                name: "코인명",
                code: "drCoinName",
            },
            {
                name: "상태",
                code: "drState",
            }
        ],
        WALLETDROP: [
            {
                name: "ERC20",
                code: "ERC20",
            }
        ],
        EXCHANGE: {
            Main: [
                {
                    name: "거래소ID",
                    code: "meId"
                }
            ],
            YN: [
                {
                    name: "Y",
                    code: '1'
                },
                {
                    name: "N",
                    code: '0'
                }
            ],

        },
        ADMIN: {
            STATUS: [
                {
                    name: '사용',
                    code: '1'
                },
                {
                    name: '미사용',
                    code: '0'
                },
            ],
            SEARCH: [
                {
                    name: 'ID',
                    code: 'admId'
                },
                {
                    name: '이름',
                    code: 'admName'
                },
            ],
            STARTPAGE: [
                {
                    name: '대시보드',
                    code: 'test'
                },
                {
                    name: '회원정보',
                    code: 'member'
                },
                {
                    name: '자산관리',
                    code: 'asset'
                }
            ]
        },


    },
    main: {
        CHECKAUTH: 'checkAuth/setIsAuthenticated',
        ONCLICKMENU: 'nowMenu',
    },
    dialog: {
        RESET: '초기화 하시겠습니까?',
        CHANGEPWD: '비밀번호를 변경 하시겠습니까?',
        SAVEDATA: '입력하신 내용을 저장 하시겠습니까?',
        DELETEDATA: '선택하신 내용을 삭제 하시겠습니까?',
        UPDATEDATA: '선택하신 내용을 수정 하시겠습니까?',
        CREATE: 'save',
        MODIFY: 'update',
        DELETE: 'delete',
        WITHDRAWRESET: '요청오류 초기화를 하시겠습니까?',
        WITHDRAWDO: '출금완료 처리 하시겠습니까?',
        WITHDRAWCANCEL: '출금을 취소 하시겠습니까?',
        WITHDRAWAPPROVAL: '출금을 승인 하시겠습니까?',
        SUCCESS_CREATE: '등록완료',
        SUCCESS_MODIFY: '수정완료',
        SUCCESS_DELETE: '삭제완료',
        ERROR_MSG: '오류 발생 하였습니다. 해당 오류 코드 확인 바랍니다 >',
    },
    errmsg: {
        LOGINFAIL: '아이디 또는 비밀번호를 확인 하세요',
        NOID: '아이디를 입력하세요',
        NONAME: '이름을 입력하세요',
        NOPHONE: '연락처를 입력하세요',
        NOPWD: '비밀번호를 입력하세요',
        NOOTP: 'OTP번호를 입력하세요',
        NOIMG: '이미지를 첨부 하세요.',
        NOSTATUS: '상태 값을 선택 하세요',
        NOLANGUAGE: '언어를 선택 하세요',
        NOLINK: '링크를 입력 하세요',
        NOCLSFC: '분류를 입력 하세요',
        NOORDER: '순서를 선택 하세요',
        NOTITLE: '제목을 입력 하세요',
        NOCONTENTS: '내용을 입력 하세요',
        NOTYPE: '타입을 선택 하세요',
        NOOPTION: '옵셥을 선택 하세요',
        NOEXCHANGEID: '거래소ID 값을 입력하세요(ex coinone)',
        NOICONURL: 'ICON URL 값을 입력하세요',
        NODOMESTIC: '국내거래소 여부 선택 하세요',
        NODEFAULTEXCHANDE: '통합거래기본거래소 여부 선택 하세요',
        NOPAUSETRADING: '거래소중지 여부 선택 하세요',
    },
    store: {
        auth: {
            LOGIN: 'checkAuth/login',
            ERROR: 'checkAuth/setErrMessage',
            FAIL: 'checkAuth/setIsLoginFail',
            SETAUTH: 'checkAuth/setIsAuthenticated',
        },
        memberInfo: {
            SETINFOLIST: 'memberInfo/getMemberInfoList',
            GETMEMBERNICELIST: 'memberInfo/getMemberNiceList',
            GETMEMBERNICELISTONPAGE: 'memberInfo/getMemberNiceListOnPage',
        },
        menulist: {
            CHANGEMOBILEMENUSTATE: 'sideNav/changeMobileMenuState',
            CHANGEMOBILESTATE: 'sideNav/changeMobileMenuState',
            CHANGEOVERLAYMENUSTATE: 'sideNav/changeOverlayMenuState',
            CHANGEOVERMENUSTATE: 'sideNav/changeOverlayMenuState',
            CHANGESTATICMENUINACTIVE: 'sideNav/changeStaticMenuInactive',
            CHANGELAYOUTMODE: 'sideNav/changeLayoutMode',
            CHANGEMENUONCLICK: 'sideNav/checkMenuOnclick',
        }
    },


}