const providers = [
    // 1. AZ-Helper - VAT申請
    {
        name: "Jonathan",
        company: "AZ-Helper",
        service_type: "VAT申請",
        offer_description: "VAT和設立公司專屬優惠",
        phone: "0905108893",
        email: "jonathan@az-helper.com",
        logo: "AZ-Helper.png",
        discount_image: "AZ-Helper _商標&VAT.png",
        qr_code: "AZ-Helper APP QRCODE - Jonathan Lee.png"
    },
    // 2. 秩宇 Wiser - 品牌素材製作
    {
        name: "Stella",
        company: "秩宇 Wiser",
        service_type: "品牌素材製作",
        offer_description: "亞馬遜視覺設計入門方案，只要您提供素材與文案，我們能迅速設計品刊登圖與Basic A+圖，讓您快速更新產品視覺。原價27,000元，優惠價24,300元。",
        company_intro: "秩宇 Wiser 隸屬於視宇集團，致力於幫助跨境品牌持續成長、貨賣全球。透過研究各國消費市場數據以及 AI 工具，推動客戶的數位品牌貿易，創造實質獲利！",
        website: "https://viewec.com/",
        phone: "02-2545-8780",
        line_id: "@viewec",
        email: "stella@wwwiser.com.tw",
        logo: "秩宇_logotype_全橫式 - View EC(1).png",
        discount_image: "秩宇 Wiser_品牌素材製作.png",
        qr_code: "視宇集團_秩宇 - View EC.png"
    },
    // 3. AZ-Helper - 商標申請
    {
        name: "Jonathan",
        company: "AZ-Helper",
        service_type: "商標申請",
        offer_description: "商標和設立公司專屬優惠",
        phone: "0905108893",
        email: "jonathan@az-helper.com",
        logo: "AZ-Helper.png",
        discount_image: "AZ-Helper _商標&VAT.png",
        qr_code: "AZ-Helper APP QRCODE - Jonathan Lee.png"
    },
    // 4. 博智衛好智權有限公司 - 商標申請
    {
        name: "Vicky Lee",
        company: "博智衛好智權有限公司",
        service_type: "商標申請",
        offer_description: "海外商標9折",
        company_intro: "博智衛好提供世界各地的商標、外觀設計、專利、版權及其他智慧財產註冊申請、維護和監控、授權及維權代理服務。\n亦有豐富的亞馬遜賣家商標申請以及品牌註冊經歷。",
        website: "https://www.bcrights.com/",
        phone: "0965596536",
        email: "vickylee@gmail.com",
        logo: "博智衛好.png"
    },
    // 5. Odin跨境電商運營 - 廣告優化
    {
        name: "Sue",
        company: "Odin跨境電商運營",
        service_type: "廣告優化",
        offer_description: "廣告優化合作第一年享有9折優惠（原價$35,000元）",
        company_intro: "Odin 跨境電商團隊，累積 7+ 年實戰經驗，為品牌量身打造亞馬遜專屬成長策略，協助賣家平均實現 200% 銷售成長",
        website: "https://odinecom.com/",
        phone: "0988397829",
        email: "sue@odinecom.com",
        logo: "Odin跨境電商運營 - Chia Yi Sue(1).png"
    },
    // 6. 秩宇Wiser - 廣告優化
    {
        name: "Stella",
        company: "秩宇Wiser",
        service_type: "廣告優化",
        offer_description: "亞馬遜廣告高效方案，協助您進行亞馬遜廣告健檢，逐步擬定廣告策略、廣告預算，並研究廣告關鍵字，同時執行銷售追蹤與分析，以及定期提供可視化報表。原價25,000+廣告花費3%~，優惠價23,000+廣告花費3%~",
        company_intro: "秩宇 Wiser 隸屬於視宇集團，致力於幫助跨境品牌持續成長、貨賣全球。透過研究各國消費市場數據以及 AI 工具，推動客戶的數位品牌貿易，創造實質獲利！",
        website: "https://viewec.com/",
        phone: "0975127727",
        line_id: "a93324u",
        email: "stella@wwwiser.com.tw",
        logo: "秩宇_logotype_全橫式 - View EC(1).png",
        discount_image: "秩宇 Wiser_廣告優化.png",
        qr_code: "視宇集團_秩宇 - View EC.png"
    },
    // 7. 全球賣跨境電商 - 廣告優化
    {
        name: "張永淑",
        company: "全球賣跨境電商",
        service_type: "廣告優化",
        offer_description: "代營運前三個月19,999/月(原價:55,000)、廣告抽成前三個月2.5%(原價5%)",
        company_intro: "Seller Vantage 全球賣：集團賦能，全球市場領航者 隸屬唯數集團旗下，專精於跨境電商領域的策略性業務核心，我們憑藉集團深厚的數位營運與全球市場拓展實力，致力於為合作夥伴精準佈局國際電商版圖，實現品牌影響力與市場銷售的雙重躍升。",
        website: "https://www.sellervantage.com.tw/ourservices/",
        phone: "0929339312",
        line_id: "chris_c.",
        email: "chris.chang@sellervantage.com.tw",
        discount_image: "全球賣跨境電商.png"
    },
    // 8. Return Helper - 海外倉
    {
        name: "Paul Yang",
        company: "Return Helper",
        service_type: "海外倉",
        offer_description: "新客戶開帳號後贈送RH系統US$100額度",
        website: "https://www.returnhelper.com.tw/",
        phone: "0983406811",
        email: "paul.yang@returnhelper.com",
        logo: "Return Helper.png"
    },
    // 9. Gladstone Fulfillment, Inc. - 海外倉
    {
        name: "Bryan Chou",
        company: "Gladstone Fulfillment, Inc.",
        service_type: "海外倉",
        offer_description: "新客戶優惠方案 : 免除初始帳戶註冊費用(價值$300 USD) 以及第一個月倉儲費用減免",
        company_intro: "Gladstone Fulfillment Inc. 位於美國加州洛杉磯地區，提供倉儲、訂單處理、備貨出貨、中轉與供應鏈整合服務。  服務相目包括物流倉儲、Amazon FBA/AWD貨物中轉、FBM一件代發，支援B2B、B2C、電商等多元出貨模式。  無論是跨境電商物流、外包倉儲物流、供應鏈管理，我們的團隊具備能力和靈活性，可以滿足任何的海外倉儲物流需求。",
        website: "www.GladstoneFulfillment.com/zh",
        phone: "909-235-6253",
        line_id: "8166826864",
        email: "bryan@gladstonefulfillment.com",
        logo: "Gladstone.jpg",
        discount_image: "Gladstone Fulfillment_2025 Q4旺季衝刺優惠專案 - Bryan Chou.jpg"
    },
    // 10. Odin跨境電商運營 - 營運顧問
    {
        name: "Sue",
        company: "Odin跨境電商運營",
        service_type: "營運顧問",
        offer_description: "亞馬遜代運營費用第一年提供9折優惠（原價$35,000元）",
        company_intro: "Odin 跨境電商團隊，累積 7+ 年實戰經驗，為品牌量身打造亞馬遜專屬成長策略，協助賣家平均實現 200% 銷售成長",
        website: "https://odinecom.com/",
        phone: "0988397829",
        email: "sue@odinecom.com",
        logo: "Odin跨境電商運營 - Chia Yi Sue(1).png"
    },
    // 11. 奕昕國際有限公司(游牧電商) - 營運顧問
    {
        name: "Wendy Chang",
        company: "奕昕國際有限公司(游牧電商)",
        service_type: "營運顧問",
        offer_description: "亞馬遜陪跑教練方案：教練會依據需要登入賣家帳戶觀察，督促進度並提出滾動式建議。成立獨立 Line 群組，發現問題立即通知，並提供處理方法讓您的營運人員執行。原價13,500/月，買3個月就送1個月(75折優惠) 。",
        company_intro: "奕昕國際有限公司成立於2017年，以游牧電商為品牌之跨境電商行銷顧問公司。主要提供中小型跨境電商公司及個人行號，客製化的[代營運服務]、[陪跑教練服務]。顧問諮詢服務力求精準，針對客戶需要之項目提供意見和服務，為賣家節省成本，讓營運更流暢。目前有[游牧電商FB粉絲團]與[亞馬遜賣家部落]，電商線上線下課程。",
        website: "https://essentialmarketing.com.tw/",
        phone: "0903332591",
        email: "nomadfriends@gmail.com",
        logo: "游牧電商 Logo - 張Wendy(1).png",
        discount_image: "奕昕國際有限公司-游牧電商_營運顧問.jpg",
        qr_code: "奕昕國際官網 (游牧電商)QRcode - 張Wendy.png"
    },
    // 12. 傑地有限公司 - 產品合規
    {
        name: "童寶慶",
        company: "傑地有限公司",
        service_type: "產品合規",
        offer_description: "FDA註冊享九折，原價：食品USD1000、醫療設備 USD1600、非處方藥USD1600、化妝品工廠USD800",
        website: "https://www.jasdi.com.tw/fda.htm",
        phone: "0988-757152",
        email: "jasdi.tc@jasdi.com.tw",
        logo: "傑地有限公司 - 張月瑜.png",
        discount_image: "傑地有限公司.png",
        qr_code: "LINE-傑地QR Code - 張月瑜.jpg"
    },
    // 13. 靈志科技有限公司 - 短影音
    {
        name: "吳廷萱",
        company: "靈志科技有限公司",
        service_type: "短影音",
        offer_description: "新手大禮包：7張商品圖攝影 + 商品Listing頁面設計 + 商品展示30sec短影音 原價 12,000 大禮包88折 10,500元",
        company_intro: "靈志科技是Chance Creative在台灣地區成立的運營實體，而Chance Creative是亞馬遜全球認證的Amazon Ads Verified Partner，在品牌出海的多媒體/短影音拍攝領域擁有豐富的經驗和專業知識，特別是面對國際市場的品牌/商品定位與賣點提煉、行銷素材(平面/影片)拍攝和影音廣告投放規畫部分，能夠為客戶提供高品質的服務。",
        website: "ChanceSight.com",
        phone: "0960197960",
        line_id: "lindawu1969",
        email: "lindawu1969@gmail.com",
        logo: "靈志科技 Logo - 吳亭萱(1).png",
        discount_image: "靈志科技有限公司1.jpg",
        discount_image2: "靈志科技有限公司2.jpg"
    },
    // 14. AZ-Helper - 第三方培訓課程
    {
        name: "Jonathan",
        company: "AZ-Helper",
        service_type: "第三方培訓課程",
        offer_description: "線上課程 專屬優惠折購價格 (以下圖片點擊放大)",
        phone: "0905108893",
        line_id: "tiamojon",
        email: "jonathan@az-helper.com",
        logo: "AZ-Helper.png",
        discount_image: "AZ-Helper_第三方培訓課程.png"
    },
    // 15. TransBiz - 第三方工具軟體
    {
        name: "Doris",
        company: "TransBiz",
        service_type: "第三方工具軟體",
        offer_description: "AI競品評論工具免費使用：https://jtbd.transbiz.com.tw",
        company_intro: "台灣第一間亞馬遜服務商、最多破億營收客戶案例。以精實創業的陪跑顧問與專家教練，讓想建立跨境事業的你，以相對低成本驗證市場、破除文化阻礙，塑造符合當地市場需求的品牌形象與價值，打造熱銷全球的品牌！",
        website: "https://transbiz.com.tw",
        phone: "0932202623",
        line_id: "@transbiz",
        email: "dorislin@transbiz.co",
        logo: "transbiz logo 500x500 square - Doris Lin.png",
        qr_code: "TransBiz-LINE-QR - Doris Lin.png"
    },
    // 16. AZ-Helper - 第三方工具軟體
    {
        name: "Jonathan",
        company: "AZ-Helper",
        service_type: "第三方工具軟體",
        offer_description: "亞馬遜賣家限時開放免費使用\n\nAZ-Helper APP 主要功能介紹：\n- 計算機：利潤計算器、FBA物流計算與降低建議、補貨計畫\n- 分析：市場分析懶人包、亞馬遜廣告PPC報表分析\n- 營運：合併排名&Review、賠償金invoice生成器、關鍵字分析工具、批次廣告建立\n- 客服/疑難雜症：評論挽回 AI、評論申訴AI、侵權申訴AI、多帳號關聯申訴AI\n\n體驗入口: https://www.az-helper.app/\n(以下圖片點擊放大)",
        website: "www.az-helper.app",
        phone: "0905108893",
        line_id: "tiamojon",
        email: "jonathan@az-helper.com",
        logo: "AZ-Helper.png",
        discount_image: "AZ_Helper_第三方工具軟體.png",
        qr_code: "AZ-Helper APP QRCODE - Jonathan Lee.png"
    },
    // 17. SellerBoard - 第三方工具軟體
    {
        name: "Jonathan",
        company: "SellerBoard",
        service_type: "第三方工具軟體",
        offer_description: "Sellerboard 功能\n-利潤數據分析，自動生成損益表等重要報表\n-運營成本管理\n-廣告利潤分析及自動優化\n-庫存管理，協助索賠\n-Listing及FBA費用 變更提醒\n-自動回覆 \n\n專案專屬優惠1): 兩個月免費體驗Sellerboard: 體驗入口 https://sellerboard.com/?p=00987\n專案專屬優惠2): 1:1線上30分鐘帳戶盈利健檢 或單品損益分析\n(以下圖片點擊放大)",
        phone: "0905108893",
        email: "jonathan@az-helper.com",
        logo: "Sellerboard Logo 簡體_1.pic - Jonathan Lee.jpg",
        discount_image: "SellerBoard.png"
    },
    // 18. 賣家精靈 - 第三方工具軟體
    {
        name: "Jonathan",
        company: "賣家精靈",
        service_type: "第三方工具軟體",
        offer_description: "主要功能介紹\n-大數據選品: 查競品、選產品、選市場、關鍵字選品\n-關鍵字研究：關鍵詞挖掘、關鍵詞反查、出單詞反查\n-運營推廣：廣告洞察、查流量來源、關聯流量、AI評論分析、產品監控\n-Chrome 插件：銷量查詢、市場分析\n\n30天免費體驗: https://sellersprite.com/cn/w/user/signup/tw\n請您註冊好帳戶後發訊息給我們, 我們將開通30天免費體驗.\n (以下圖片點擊放大)",
        phone: "0905108893",
        email: "jonathan@az-helper.com",
        logo: "賣家精靈 白字橘底 - Jonathan Lee.png",
        discount_image: "SellerSprite.png"
    },
    // 19. 金匯國際物流 - 跨境物流
    {
        name: "Linda Tsai",
        company: "金匯國際物流",
        service_type: "跨境物流",
        offer_description: "日本海運/歐洲海運方案: 折扣 新台幣$2,000/票\n不限新舊客, 限使用一次\n\n日本亞馬遜免ACP節稅方案\n新台幣$25,800/首CBM\n新台幣$4,000/續CBM\n\n澳洲亞馬遜空運方案門到門專案價:\n重量級距          報價\n70KG+      新台幣$279/KG\n100KG+   新台幣$239/KG\n150KG+   新台幣$209/KG\n200KG+   新台幣$99/KG\n250KG+   新台幣$189/KG\n\n澳洲亞馬遜海運方案門到門專案價:\n新台幣$20,800/首CBM\n新台幣$7,000/續CBM",
        company_intro: "金匯國際物流股專注於跨境物流整合方案，致力於以數位化工具重塑物流體驗，我們的服務涵蓋美國、日本、澳洲與歐洲，提供多元運輸服務與海外倉儲加值服務，協助品牌精準佈局國際市場。",
        website: "https://shipprime.com.tw/",
        phone: "0955321429",
        line_id: "063lokgc",
        email: "lindatsai@goldenwelltw.com",
        logo: "金匯_橫式_0.png",
        qr_code: "金匯.png"
    },
    // 20. 萬泰物流供應鏈股份有限公司 - 跨境物流
    {
        name: "江仁凱",
        company: "萬泰物流供應鏈股份有限公司",
        service_type: "跨境物流",
        offer_description: "專案價9折\n\n日本亞馬遜\n啟運價  NTD24500/首CBM\n續CBM NTD8000/CＢＭ　1-3CBM(未滿3CBM)\n續CBM NTD5500/CＢＭ　3-8CBM(未滿8CBM)\n續CBM NTD5000/CＢＭ　8CBM以上\n\n澳洲亞馬遜\n啟運價  NTD25800/首CBM\n續CBM  NTD7000/CBM",
        company_intro: "設 立：1995年7月 員工人數：台灣 .中國 2500人 // 全球 約 3500人 董 事 長：鄭毓文 先生 組織協會： 國際海運承攬運送公會會員FIATA。國際航空運輸協會會員IATA No：HO 34-306580000。海運承攬運送商業同業IOFFLAT No.：305。美國聯邦海事委員會FMC Bond No.：90961。中國大陸無船公共運送人NVOCC No.：MOC-NV01754。中國大陸一級貨代 No.：C120069884。 美國C-TPAT//歐洲 WCA Family of Logistic Networks 總 公 司：台北市八德路 2段 308 號 5 樓 聯絡電話：+886-2-25459900",
        website: "https://scm.dolphin-gp.com/en",
        phone: "0930889145",
        line_id: "victory10052",
        email: "eason.chiang@dolphin-gp.com",
        discount_image: "萬泰2025高峰會LOGO淺 - 江仁凱.jpg",
        qr_code: "萬泰物流.jpg"
    },
    // 21. 台灣順豐速運 - 跨境物流
    {
        name: "Andre Hsu",
        company: "台灣順豐速運",
        service_type: "跨境物流",
        offer_description: "月結客戶國際快遞9折起(其他貨型享優惠專案報價)",
        company_intro: "台灣順豐速運是跨境物流專家，除了優勢的空運快遞外，更能依您所需客製跨境貨運代理服務，是您拓展跨境貿易、跨境電商的最佳夥伴！時效優異、全程快遞路由追蹤並提供保價服務(貨物保險)，安心又快速。",
        website: "www.sf-express.com.tw",
        phone: "0916865352",
        line_id: "andre5233",
        email: "andrehsu@sf-express.com.tw",
        logo: "台灣順豐速運LOGO繁體(去背) - ANDRE HSU.png",
        discount_image: "台灣順豐速運 - ANDRE HSU.jpg"
    },
    // 22. Payoneer - 金流服務
    {
        name: "Lucas",
        company: "Payoneer",
        service_type: "金流服務",
        offer_description: "亞馬遜廣告費刷卡返利加碼 20%活動 (2025/10/1-2025/12/31) \ni. Payoneer隨心付新用戶：沒有申辦過 Payoneer隨心卡的高級別的VIP管理賣家 (月廣告費 USD 20,000 以上\nii. Payoneer隨心付現有用戶：高消費商戶可聯繫客戶經理訂製方案\n\n請填寫表單開通優惠: https://reurl.cc/OmKrgr",
        company_intro: "Payoneer（NASDAQ: PAYO）成立於2005年，總部位於美國紐約，是全球領先的跨境支付平台。 服務涵蓋190+國家與地區、150+幣別，提供電商賣家、自由工作者與企業多幣別收款帳戶、供應商付款、跨境轉帳及Mastercard卡片。Payoneer以合規安全、費率透明與操作便利著稱，協助用戶降低跨境金流成本並提升全球業務效率。",
        website: "https://www.payoneer.com/",
        phone: "0909604190",
        line_id: "lucas0122",
        email: "lucashs@payoneer.com",
        logo: "Payoneer_China_Master_Logo_OnWhite_RGB (2) - lucas hsu.jpg",
        qr_code: "Payoneer LINE@ - lucas hsu.png"
    },
    // 23. 尋匯SUNRATE - 金流服務
    {
        name: "洪銘言 Frank",
        company: "尋匯SUNRATE",
        service_type: "金流服務",
        offer_description: "跨境第三方金流 提現&支付手續費 0.5% (原價0.7%)",
        company_intro: "尋匯SUNRATE創立於2016年，全球業務總部位於新加坡，致力於為企業提供安全、高效的全球支付與財資管理解決方案。公司與花旗、渣打等國際頂級銀行達成合作，並取得了Mastercard和Visa的主會員資質，同時也是亞馬遜SPN服務商。依託自主研發的強大技術引擎、廣泛的支付網路與定制化API方案，尋匯SUNRATE助力企業在190+國家及地區開展業務。",
        website: "https://www.sunrate.com/",
        phone: "0971753892",
        line_id: "soramisu",
        email: "frank.hung@sunrate.com",
        logo: "尋匯SUNRATE - Ming Yen Hung.png"
    },
    // 24. 奕昕國際有限公司(游牧電商) - 品牌素材製作
    {
        name: "Wendy Chang",
        company: "奕昕國際有限公司(游牧電商)",
        service_type: "品牌素材製作",
        offer_description: "亞馬遜文案升級包：協助您優化品牌提升視覺一致性，原價15,000元 ，專屬優惠價:10,000元。",
        company_intro: "奕昕國際有限公司成立於2017年，以游牧電商為品牌之跨境電商行銷顧問公司。主要提供中小型跨境電商公司及個人行號，客製化的[代營運服務]、[陪跑教練服務]。顧問諮詢服務力求精準，針對客戶需要之項目提供意見和服務，為賣家節省成本，讓營運更流暢。目前有[游牧電商FB粉絲團]與[亞馬遜賣家部落]，電商線上線下課程。",
        website: "https://essentialmarketing.com.tw/",
        phone: "0903332591",
        email: "nomadfriends@gmail.com",
        logo: "游牧電商 Logo - 張Wendy(1).png",
        discount_image: "奕昕國際有限公司-游牧電商_品牌素材製作.jpg"
    }
];
