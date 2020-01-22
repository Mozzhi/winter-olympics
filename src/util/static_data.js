const survey_img = require('../../static/images/staticimg/1.png');
const video_matter = require('../../static/images/staticimg/2.png');
const word_matter = require('../../static/images/staticimg/3.png');
const img_matter = require('../../static/images/staticimg/4.png');
function returnImg(url) {
  return require(`../../static/images/hulun/${url}.png`);
}
function returnCharmImg(url) {
  return require(`../../static/images/charm/${url}.png`);
}

export const innerMongolia = [
  {
    name: '内蒙古概况',
    id: 47,
    survey_img: returnCharmImg('nei/1'),
    video_matter: returnCharmImg('nei/视频素材'),
    word_matter: returnCharmImg('nei/文字素材'),
    img_matter: returnCharmImg('nei/图片素材'),
  },
  {
    name: '呼伦贝尔市',
    id: 48,
    survey_img: survey_img,
    video_matter: video_matter,
    word_matter: word_matter,
    img_matter: img_matter
  },
  {
    name: '呼和浩特市',
    id: 49,
    survey_img: returnCharmImg('hu/1'),
    video_matter: returnCharmImg('hu/视频素材'),
    word_matter: returnCharmImg('hu/文字素材'),
    img_matter: returnCharmImg('hu/图片素材'),
  },
  {
    name: '乌兰察布市',
    id: 50,
    survey_img: returnCharmImg('4/1'),
    video_matter: returnCharmImg('4/视频素材'),
    word_matter: returnCharmImg('4/文字素材'),
    img_matter: returnCharmImg('4/图片素材'),
  },
  {
    name: '赤峰市',
    id: 51,
    survey_img: returnCharmImg('5/1'),
    video_matter: returnCharmImg('5/视频素材'),
    word_matter: returnCharmImg('5/文字素材'),
    img_matter: returnCharmImg('5/图片素材'),
  },
  {
    name: '锡林郭勒盟',
    id: 52,
    survey_img: returnCharmImg('6/1'),
    video_matter: returnCharmImg('6/视频素材'),
    word_matter: returnCharmImg('6/文字素材'),
    img_matter: returnCharmImg('6/图片素材'),
  },
  {
    name: '兴安盟',
    id: 53,
    survey_img: returnCharmImg('7/1'),
    video_matter: returnCharmImg('7/视频素材'),
    word_matter: returnCharmImg('7/文字素材'),
    img_matter: returnCharmImg('7/图片素材'),
  },
  {
    name: '包头市',
    id: 54,
    survey_img: returnCharmImg('8/1'),
    video_matter: returnCharmImg('8/视频素材'),
    word_matter: returnCharmImg('8/文字素材'),
    img_matter: returnCharmImg('8/图片素材'),
  },
  {
    name: '鄂尔多斯市',
    id: 55,
    survey_img: returnCharmImg('9/1'),
    video_matter: returnCharmImg('9/视频素材'),
    word_matter: returnCharmImg('9/文字素材'),
    img_matter: returnCharmImg('9/图片素材'),
  },
  {
    name: '通辽市',
    id: 56,
    survey_img: returnCharmImg('10/1'),
    video_matter: returnCharmImg('10/视频素材'),
    word_matter: returnCharmImg('10/文字素材'),
    img_matter: returnCharmImg('10/图片素材'),
  },
  {
    name: '巴彦淖尔市',
    id: 57,
    survey_img: returnCharmImg('11/1'),
    video_matter: returnCharmImg('11/视频素材'),
    word_matter: returnCharmImg('11/文字素材'),
    img_matter: returnCharmImg('11/图片素材'),
  },
  {
    name: '乌海市',
    id: 58,
    survey_img: returnCharmImg('12/1'),
    video_matter: returnCharmImg('12/视频素材'),
    word_matter: returnCharmImg('12/文字素材'),
    img_matter: returnCharmImg('12/图片素材'),
  },
  {
    name: '阿拉善盟',
    id: 59,
    survey_img: returnCharmImg('13/1'),
    video_matter: returnCharmImg('13/视频素材'),
    word_matter: returnCharmImg('13/文字素材'),
    img_matter: returnCharmImg('13/图片素材'),
  },
];

export const gamesProject = [
  {
    name:"雪橇",
    id:"1"
  },
  {
    name:"钢架雪车",
    id:"2"
  },
  {
    name:"雪车",
    id:"3"
  },
  {
    name:"自由式滑雪",
    id:"4"
  },
  {
    name:"北欧两项",
    id:"5"
  },
  {
    name:"跳台滑雪",
    id:"6"
  },
  {
    name:"越野滑雪",
    id:"7"
  },
  {
    name:"短道速滑",
    id:"8"
  },
  {
    name:"速度滑冰",
    id:"9"
  },
  {
    name:"单板滑雪",
    id:"10"
  },
  {
    name:"高山滑雪",
    id:"11"
  },
  {
    name:"冬季两项",
    id:"12"
  },
  {
    name:"冰球",
    id:"13"
  },
  {
    name:"冰壶",
    id:"14"
  },
  {
    name:"花样滑冰",
    id:"15"
  },

];

export let hulunData = [
  {
    name: '"十四冬"冬韵篇',
    intro: '呼伦贝尔之俱备',
    id: '46',
    survey_img: returnImg('dong/1'),
    video_matter: returnImg('dong/2'),
    word_matter: returnImg('dong/3'),
    img_matter: returnImg('dong/4'),
  },
  {
    name: '自然地理篇',
    intro: '呼伦贝尔之广袤',
    id: '39',
    survey_img: returnImg('zi/1'),
    video_matter: returnImg('zi/2'),
    word_matter: returnImg('zi/3'),
    img_matter: returnImg('zi/4'),
  },
  {
    name: '历史追溯篇',
    intro: '呼伦贝尔之深邃',
    id: '40',
    survey_img: returnImg('history/1'),
    video_matter: returnImg('history/2'),
    word_matter: returnImg('history/3'),
    img_matter: returnImg('history/4'),
  },
  {
    name: '政治经济篇',
    intro: '呼伦贝尔之发展',
    id: '41',
    survey_img: returnImg('enomi/1'),
    video_matter: returnImg('enomi/2'),
    word_matter: returnImg('enomi/3'),
    img_matter: returnImg('enomi/4'),
  },
  {
    name: '旅游文化篇',
    intro: '呼伦贝尔之魅力',
    id: '42',
    survey_img: returnImg('tran/1'),
    video_matter: returnImg('tran/2'),
    word_matter: returnImg('tran/3'),
    img_matter: returnImg('tran/4'),
  },
  {
    name: '未来展望篇',
    intro: '呼伦贝尔之进取',
    id: '43',
    survey_img: returnImg('feture/1'),
    video_matter: returnImg('feture/2'),
    word_matter: returnImg('feture/3'),
    img_matter: returnImg('feture/4'),
  }
];

export let hulunTitle = {
  7: '每日新闻',
  8: '开闭幕式',
  13: '即时引语',
  14: '发布会摘要',
  15: '综合新闻',
  16: '媒体通告',
  17: '赛前信息',
  18: '背景资料',
  19: '主新闻中心',
  20: '场馆新闻中心',
  21: '服务信息',
  22: '媒体手册',
  23: "雪橇",
  24: "钢架雪车",
  25: "雪车",
  26: "自由式滑雪",
  27: "北欧两项",
  28: "跳台滑雪",
  29: "越野滑雪",
  30: "短道速滑",
  31: "速度滑冰",
  32: "单板滑雪",
  33: "高山滑雪",
  34: "冬季两项",
  35: "冰球",
  36: "冰壶",
  37: "花样滑冰",
  46: '"十四冬"冬韵篇',
  39: '自然地理篇',
  40: '历史追溯篇',
  41: '政治经济篇',
  42: '旅游文化篇',
  43: '未来展望篇',
  47: '内蒙古概况',
  48: '呼伦贝尔市',
  49: '呼和浩特市',
  50: '乌兰察布市',
  51: '赤峰市',
  52: '锡林郭勒盟',
  53: '兴安盟',
  54: '包头市',
  55: '鄂尔多斯市',
  56: '通辽市',
  57: '巴彦淖尔市',
  58: '乌海市',
  59: '阿拉善盟',
  60:"速度滑冰馆",
  61:"短道速滑馆",
  62:"冰球冰壶馆",
  63:"主媒体中心",
  64:"牙克石凤凰山滑雪场",
  65:"扎兰屯金龙山滑雪场",
  66:"喀喇沁美林谷滑雪场",
  67:"凉城岱海国际滑雪场",
  68:"多伦龙泽湖公园",
  69:"呼伦贝尔市体育场"
};

export let jalousie = [
  { 13: "即时引语"},
  { 14: "发布会摘要"},
  { 15: "综合新闻"},
  { 17: "赛事前瞻"},
  { 60: "比赛赛况"},
  { 18: "背景资料"},
];

export const breadcrumb = {
  0: { link: '/', text: '首页' },
  1: { link: '/list_pages/msg_service', text: '信息服务' },
  2: { link: '/EventServices/2', text: '赛事日程' },
  3: { link: '/EventServices/3', text: '赛事场馆' },
  4: { link: '/EventServices/4', text: '比赛项目' },
  5: { link: '/splendid_pages/splendid_img', text: '精彩图片' },
  6: { link: '/splendid_pages/splendid_video', text: '精彩视频' },
  7: { link: '/list_pages/Daily_News', text: '每日新闻' },
  8: { link: '/list_pages/Ceremony', text: '开闭幕式' },
  9: { link: '/charm_inner_mongolia', text: '魅力内蒙古' },
  10: { link: '/hulun_buir', text: '这里是呼伦贝尔' },
  11: { link: '/news_center', text: '新闻中心' },
  12: { link: '/cityline/city_visiting', text: '城市采访线' },
  13: { link: '/list_pages/msg_service', text: '即时引语' },
  14: { link: '/list_pages/msg_service', text: '发布会摘要' },
  15: { link: '/list_pages/msg_service', text: '综合新闻' },
  16: { link: '/list_pages/msg_service', text: '媒体通告' },
  17: { link: '/list_pages/msg_service', text: '赛前信息' },
  18: { link: '/list_pages/msg_service', text: '背景资料' },
  19: { link: '/news_center', text: '主新闻中心' },
  20: { link: '/news_center', text: '场馆新闻中心' },
  21: { link: '/news_center', text: '服务信息' },
  22: { link: '/news_center', text: '媒体手册' },
  23: { link: '/splendid_pages/splendid_img', text: '雪橇' },
  24: { link: '/splendid_pages/splendid_img', text: '钢架雪车' },
  25: { link: '/splendid_pages/splendid_img', text: '雪车' },
  26: { link: '/splendid_pages/splendid_img', text: '自由式滑雪' },
  27: { link: '/splendid_pages/splendid_img', text: '北欧两项' },
  28: { link: '/splendid_pages/splendid_img', text: '跳台滑雪' },
  29: { link: '/splendid_pages/splendid_img', text: '越野滑雪' },
  30: { link: '/splendid_pages/splendid_img', text: '短道速滑' },
  31: { link: '/splendid_pages/splendid_img', text: '速度滑冰' },
  32: { link: '/splendid_pages/splendid_img', text: '单板滑雪' },
  33: { link: '/splendid_pages/splendid_img', text: '高山滑雪' },
  34: { link: '/splendid_pages/splendid_img', text: '冬季两项' },
  35: { link: '/splendid_pages/splendid_img', text: '冰球' },
  36: { link: '/splendid_pages/splendid_img', text: '冰壶' },
  37: { link: '/splendid_pages/splendid_img', text: '花样滑冰' },
  38: { link: '/blessing', text: '寄语' },
  39: { link: '/hulun_buir', text: '自然地理篇' },
  40: { link: '/hulun_buir', text: '历史追溯篇' },
  41: { link: '/hulun_buir', text: '政治经济篇' },
  42: { link: '/hulun_buir', text: '旅游文化篇' },
  43: { link: '/hulun_buir', text: '未来展望篇' },
  44: { link: '/', text: '赛前信息' },
  45: { link: '/', text: '赛前信息' },
  46: { link: '/hulun_buir', text: '"十四冬"冬韵篇' },
  47: { link: '/charm_inner_mongolia', text: '内蒙古概况' },
  48: { link: '/charm_inner_mongolia', text: '呼伦贝尔市' },
  49: { link: '/charm_inner_mongolia', text: '呼和浩特市' },
  50: { link: '/charm_inner_mongolia', text: '乌兰察布市' },
  51: { link: '/charm_inner_mongolia', text: '赤峰市' },
  52: { link: '/charm_inner_mongolia', text: '锡林郭勒盟' },
  53: { link: '/charm_inner_mongolia', text: '兴安盟' },
  54: { link: '/charm_inner_mongolia', text: '包头市' },
  55: { link: '/charm_inner_mongolia', text: '鄂尔多斯市' },
  56: { link: '/charm_inner_mongolia', text: '通辽市' },
  57: { link: '/charm_inner_mongolia', text: '巴彦淖尔市' },
  58: { link: '/charm_inner_mongolia', text: '乌海市' },
  59: { link: '/charm_inner_mongolia', text: '阿拉善盟' },
  60: { link: '/cityline/search/?tw=61', text: '速度滑冰馆' },
  61: { link: '/cityline/search/?tw=61', text: '短道速滑馆' },
  62: { link: '/cityline/search/?tw=61', text: '冰球冰壶馆' },
  63: { link: '/cityline/search/?tw=61', text: '主媒体中心' },
  64: { link: '/cityline/search/?tw=61', text: '牙克石凤凰山滑雪场' },
  65: { link: '/cityline/search/?tw=61', text: '扎兰屯金龙山滑雪场' },
  66: { link: '/cityline/search/?tw=61', text: '喀喇沁美林谷滑雪场' },
  67: { link: '/cityline/search/?tw=61', text: '凉城岱海国际滑雪场' },
  68: { link: '/cityline/search/?tw=61', text: '多伦龙泽湖公园' },
  69: { link: '/cityline/search/?tw=61', text: '呼伦贝尔市体育场' },
  100: { link: '/EventServices/4', text: '赛事服务' },
  101: { link: '/cityline/search/?tw=61', text: '搜索' },
};

export const gameList = [
  { name:"雪橇", id:"23" },
  { name:"钢架雪车", id:"24" },
  { name:"雪车", id:"25" },
  { name:"自由式滑雪", id:"26" },
  { name:"北欧两项", id:"27" },
  { name:"跳台滑雪", id:"28" },
  { name:"越野滑雪", id:"29" },
  { name:"短道速滑", id:"30" },
  { name:"速度滑冰", id:"31" },
  { name:"单板滑雪", id:"32" },
  { name:"高山滑雪", id:"33" },
  { name:"冬季两项", id:"34" },
  { name:"冰球", id:"35" },
  { name:"冰壶", id:"36" },
  { name:"花样滑冰", id:"37" },
];

export const venueList = [
  { name:"速度滑冰馆", id:"60" },
  { name:"短道速滑馆", id:"61" },
  { name:"冰球冰壶馆", id:"62" },
  { name:"主媒体中心", id:"63" },
  { name:"牙克石凤凰山滑雪场", id:"64" },
  { name:"扎兰屯金龙山滑雪场", id:"65" },
  { name:"喀喇沁美林谷滑雪场", id:"66" },
  { name:"凉城岱海国际滑雪场", id:"67" },
  { name:"多伦龙泽湖公园", id:"68" },
  { name:"呼伦贝尔市体育场", id:"69" }
];
