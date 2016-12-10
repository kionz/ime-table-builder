import $, {上下, 左右, 包圍, 整體} from './Cangjie5Rules';

// 倉頡字母
export const
日 = $('a'),
月 = $('b'),
金 = $('c'),
木 = $('d'),
水 = $('e'),
火 = $('f'),
土 = $('g'),
竹 = $('h'),
戈 = $('i'),
十 = $('j'),
大 = $('k'),
中 = $('l'),
一 = $('m'),
弓 = $('n'),
人 = $('o'),
心 = $('p'),
手 = $('q'),
口 = $('r'),
尸 = $('s'),
廿 = $('t'),
山 = $('u'),
女 = $('v'),
田 = $('w'),
難 = $('x'),
卜 = $('y');

// 整體字
export const
業 = 整體(廿, 金, 廿, 十, 木);

// 組合字
export const
明 = 上下(日, 月),
林 = 左右(木, 木),
森 = 上下(木, 林),
涅 = 左右(水, 上下(日, 土)),
朝 = 左右(整體(十, 日, 十), 月),
樑 = 左右(木, 上下(左右(水, 整體(尸, 竹, 金)), 木));