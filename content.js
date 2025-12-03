// ================= 网站内容数据 =================
const siteContent = [
    {
        categoryName: "技术基础",
        pages: [
            {
                title: "计算机体系结构",
                intro: "计算机系统的组成和工作原理。",
                cards: [
                    {
                        title: "计算机的基本结构",
                        desc: "冯·诺依曼体系结构的基本组成：运算器、控制器、存储器、输入设备和输出设备。",
                        image: "imgs/计算机原理/计算机体系结构.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "冒泡排序",
                intro: "最基础的排序算法之一。",
                cards: [
                    {
                        title: "冒泡排序的原理",
                        desc: "通过重复遍历要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。",
                        image: "imgs/冒泡算法.png", 
                        code: "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr",
                        lang: "python"
                    }
                ]
            },
            {
                title: "HTTP 工作原理",
                intro: "互联网通信的基础协议。",
                cards: [
                    {
                        title: "客户端与服务器",
                        desc: "就像去餐厅点菜。你是客户端，服务员是网络，厨房是服务器。\n你发起请求（点菜），厨房做好后给你响应（上菜）。\n\n<b>重点：</b>这是一个请求-响应模型。",
                        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=1200&auto=format&fit=crop&q=80", 
                        code: "GET /menu.html HTTP/1.1\nHost: restaurant.com\nUser-Agent: Mozilla/5.0",
                        lang: "http"
                    },
                    {
                        title: "Python 示例",
                        desc: "用 Python 发送一个请求是这样的：",
                        image: "",
                        code: "import requests\n\nresponse = requests.get('https://api.github.com')\nprint(response.status_code)",
                        lang: "python"
                    }
                ]
            },
            {
                title: "HTTPS 加密",
                intro: "如何保证数据传输安全？",
                cards: [
                    {
                        title: "非对称加密",
                        desc: "公钥加密，私钥解密。",
                        image: "",
                        code: ""
                    }
                ]
            },
            {
                title: "VMProtect",
                intro: "一种强大的软件保护工具。",
                cards: [
                    {
                        title: "VMProtect 原理",
                        desc: "如何使用虚拟机技术保护软件？",
                        image: "imgs/逆向工程/VMProtect.png", 
                        code: "",
                        lang: ""
                    }
                ]
            }
        ]
    },
    {
        categoryName: "信息安全",
        pages: [
            {
                title: "漏洞利用核心",
                intro: "漏洞利用的基本原理和核心技术。",
                cards: [
                    {
                        title: "漏洞利用核心1",
                        desc: "介绍漏洞利用的核心概念和技术。",
                        image: "信息安全/漏洞利用核心1.png", 
                        code: "",
                        lang: ""
                    },
                    {
                        title: "漏洞利用核心2",
                        desc: "深入探讨漏洞利用的高级技术和实践。",
                        image: "信息安全/漏洞利用核心2.png", 
                        code: "",
                        lang: ""
                    }
                ]
            }
        ]
    },
    {
        categoryName: "金融知识",
        pages: [
            {
                title: "从0到1",
                intro: "从零开始创建新事物的哲学。",
                cards: [
                    {
                        title: "创新的本质",
                        desc: "如何从无到有创造价值？",
                        image: "金融知识美漫/从01到1.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "债务危机",
                intro: "理解债务危机的形成和影响。",
                cards: [
                    {
                        title: "债务危机的根源",
                        desc: "什么导致了债务危机的爆发？",
                        image: "金融知识美漫/债务危机.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "债务陷阱",
                intro: "用形象的比喻理解什么是债务陷阱。",
                cards: [
                    {
                        title: "什么是复利效应？",
                        desc: "爱因斯坦说复利是世界第八大奇迹。但在债务中，它是恶魔。\n利滚利就像滚雪球，越滚越大。",
                        image: "金融知识美漫/债务陷阱.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "互联网赚钱",
                intro: "如何在互联网上赚钱？",
                cards: [
                    {
                        title: "互联网赚钱",
                        desc: "如何在互联网上赚钱？",
                        image: "金融知识美漫/互联网赚钱.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "原则",
                intro: "生活和工作的基本原则。",
                cards: [
                    {
                        title: "瑞·达利欧的原则",
                        desc: "如何建立自己的原则体系？",
                        image: "金融知识美漫/原则.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "周期",
                intro: "经济和市场的周期性变化。",
                cards: [
                    {
                        title: "认识经济周期",
                        desc: "经济发展的周期性规律。",
                        image: "金融知识美漫/周期.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "哲学简史",
                intro: "哲学思想的发展历程。",
                cards: [
                    {
                        title: "西方哲学的主要流派",
                        desc: "从古希腊到现代哲学的演变。",
                        image: "金融知识美漫/哲学简史.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "国富论",
                intro: "亚当·斯密的经典经济学著作。",
                cards: [
                    {
                        title: "看不见的手",
                        desc: "自由市场经济的基本原理。",
                        image: "金融知识美漫/国富论.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "如何经营自己的公司",
                intro: "创业和经营企业的实用指南。",
                cards: [
                    {
                        title: "企业经营的关键要素",
                        desc: "成功经营企业需要关注哪些方面？",
                        image: "金融知识美漫/如何经营自己的公司.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "富人的阴谋",
                intro: "揭示财富分配的秘密。",
                cards: [
                    {
                        title: "富人如何积累财富",
                        desc: "财富创造和分配的真相。",
                        image: "金融知识美漫/富人的阴谋.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "富爸爸房地产",
                intro: "房地产投资的策略和技巧。",
                cards: [
                    {
                        title: "房地产投资的基本原则",
                        desc: "如何通过房地产创造被动收入？",
                        image: "金融知识美漫/富爸爸房地产.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "思考，快与慢",
                intro: "人类思维的两种模式。",
                cards: [
                    {
                        title: "系统1和系统2",
                        desc: "直觉思维与理性思维的区别。",
                        image: "金融知识美漫/思考，快与慢.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "我能让你致富",
                intro: "实现财务自由的实用方法。",
                cards: [
                    {
                        title: "致富的基本法则",
                        desc: "如何改变思维方式创造财富？",
                        image: "金融知识美漫/我能让你致富.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "房产投资最重要的事",
                intro: "房地产投资的核心原则。",
                cards: [
                    {
                        title: "投资房产的关键考量",
                        desc: "什么是房产投资中最重要的因素？",
                        image: "金融知识美漫/房产投资最重要的事.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "房地产周期",
                intro: "房地产市场的周期性变化。",
                cards: [
                    {
                        title: "理解房地产周期",
                        desc: "如何把握房地产市场的时机？",
                        image: "金融知识美漫/房地产周期.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "房地产投资指南",
                intro: "房地产投资的全面指南。",
                cards: [
                    {
                        title: "房地产投资的步骤",
                        desc: "从入门到精通的投资路径。",
                        image: "金融知识美漫/房地产投资指南.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "房地产致富圣经",
                intro: "通过房地产实现财务自由。",
                cards: [
                    {
                        title: "房地产致富的策略",
                        desc: "如何通过房地产积累大量财富？",
                        image: "金融知识美漫/房地产致富圣经.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "投资最重要的事",
                intro: "投资的核心原则和策略。",
                cards: [
                    {
                        title: "投资的关键理念",
                        desc: "成功投资的基本原则。",
                        image: "金融知识美漫/投资最重要的事.png", 
                        code: "",
                        lang: ""
                    },
                    {
                        title: "高级投资策略",
                        desc: "如何在复杂市场中做出明智决策？",
                        image: "金融知识美漫/投资最重要的事2.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "比特币",
                intro: "数字货币的革命。",
                cards: [
                    {
                        title: "比特币的本质",
                        desc: "去中心化货币的未来。",
                        image: "金融知识美漫/比特币.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "洗钱原理",
                intro: "洗钱的运作方式和危害。",
                cards: [
                    {
                        title: "什么是洗钱？",
                        desc: "非法资金如何合法化？",
                        image: "金融知识美漫/洗钱原理.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "洛克菲勒",
                intro: "石油大王的商业传奇。",
                cards: [
                    {
                        title: "洛克菲勒的商业智慧",
                        desc: "如何建立商业帝国？",
                        image: "金融知识美漫/洛克菲勒.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "穷爸爸富爸爸：投资指南",
                intro: "财务自由的投资策略。",
                cards: [
                    {
                        title: "两类投资者的区别",
                        desc: "穷爸爸与富爸爸的投资理念差异。",
                        image: "金融知识美漫/穷爸爸富爸爸：投资指南.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "经济学原理",
                intro: "经济学的基本概念和原理。",
                cards: [
                    {
                        title: "微观经济学与宏观经济学",
                        desc: "经济学的两大分支。",
                        image: "金融知识美漫/经济学原理.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "聪明的投资者",
                intro: "价值投资的经典著作。",
                cards: [
                    {
                        title: "价值投资的基本原则",
                        desc: "如何成为聪明的投资者？",
                        image: "金融知识美漫/聪明的投资者.png", 
                        code: "",
                        lang: ""
                    },
                    {
                        title: "市场波动的应对策略",
                        desc: "如何在市场波动中保持冷静？",
                        image: "金融知识美漫/聪明的投资者2.png", 
                        code: "",
                        lang: ""
                    },
                    {
                        title: "长期投资的优势",
                        desc: "为什么长期投资更容易成功？",
                        image: "金融知识美漫/聪明的投资者3.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "财富自由之路",
                intro: "实现财务自由的路径和方法。",
                cards: [
                    {
                        title: "财务自由的定义",
                        desc: "什么是真正的财务自由？",
                        image: "金融知识美漫/财富自由之路.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "资本与意识形态",
                intro: "资本与社会意识形态的关系。",
                cards: [
                    {
                        title: "资本的本质",
                        desc: "资本如何塑造社会形态？",
                        image: "金融知识美漫/资本与意识形态.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "资本之王",
                intro: "私募股权的传奇故事。",
                cards: [
                    {
                        title: "私募股权的运作模式",
                        desc: "如何通过私募股权创造巨额财富？",
                        image: "金融知识美漫/资本之王.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "赢家通吃",
                intro: "网络时代的竞争规则。",
                cards: [
                    {
                        title: "网络效应",
                        desc: "为什么赢家通吃现象在网络时代更加明显？",
                        image: "金融知识美漫/赢家通吃.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "金融的本质",
                intro: "金融的核心功能和运作原理。",
                cards: [
                    {
                        title: "金融的基本概念",
                        desc: "什么是金融的本质？",
                        image: "金融知识美漫/金融的本质.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "钱7个步骤",
                intro: "积累财富的7个关键步骤。",
                cards: [
                    {
                        title: "财富积累的步骤",
                        desc: "如何一步步实现财务自由？",
                        image: "金融知识美漫/钱7个步骤.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "长期持有",
                intro: "价值投资的核心理念。",
                cards: [
                    {
                        title: "长期持有的优势",
                        desc: "为什么长期持有是投资成功的关键？",
                        image: "金融知识美漫/长期持有.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "彼得·林奇的成功投资",
                intro: "彼得·林奇的成功投资",
                cards: [
                    {
                        title: "彼得·林奇的成功投资",
                        desc: "彼得·林奇的成功投资",
                        image: "金融知识美漫/彼得·林奇的成功投资.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "证券分析",
                intro: "证券分析",
                cards: [
                    {
                        title: "证券分析",
                        desc: "证券分析",
                        image: "金融知识美漫/证券分析.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "金钱心理学",
                intro: "金钱心理学",
                cards: [
                    {
                        title: "金钱心理学",
                        desc: "金钱心理学",
                        image: "金融知识美漫/金钱心理学.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
            {
                title: "随机漫步的傻瓜",
                intro: "概率论与投资的关系。",
                cards: [
                    {
                        title: "随机性的影响",
                        desc: "如何理解市场中的随机性？",
                        image: "金融知识美漫/随机漫步的傻瓜.png", 
                        code: "",
                        lang: ""
                    }
                ]
            },
        ]
    }
];