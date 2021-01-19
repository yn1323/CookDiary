import popular from 'src/asset/images/tag/popular.jpg'
import meat from 'src/asset/images/tag/meat.jpg'
import fish from 'src/asset/images/tag/fish.jpg'
import vegetable from 'src/asset/images/tag/vegetable.jpg'
import egg from 'src/asset/images/tag/egg.jpg'
import seaweed from 'src/asset/images/tag/seaweed.jpg'
import tofu from 'src/asset/images/tag/tofu.jpg'
import jerky from 'src/asset/images/tag/jerky.jpg'
import cheese from 'src/asset/images/tag/cheese.jpg'
import salad from 'src/asset/images/tag/salad.jpg'
import soup from 'src/asset/images/tag/soup.jpg'
import rice from 'src/asset/images/tag/rice.jpg'
import ball from 'src/asset/images/tag/ball.jpg'
import pot from 'src/asset/images/tag/pot.jpg'
import noodle from 'src/asset/images/tag/noodle.jpg'
import etc from 'src/asset/images/tag/etc.jpg'

import moment from 'moment-timezone'

import { Tag } from 'Common'

// デバッグ用
export const END_POINT = process.env.NODE_ENV === 'production' ? '' : ''

export const isProduction = process.env.NODE_ENV === 'production'

export const tags: Tag[] = [
  { index: 1, label: '定番', img: popular, action: 'popular' },
  { index: 2, label: '肉のおかず', img: meat, action: 'meat' },
  { index: 3, label: '魚のおかず', img: fish, action: 'fish' },
  { index: 4, label: '野菜のおかず', img: vegetable, action: 'vegetable' },
  { index: 5, label: '卵のおかず', img: egg, action: 'egg' },
  { index: 6, label: '海藻類のおかず', img: seaweed, action: 'seaweed' },
  { index: 7, label: '大豆加工品のおかず', img: tofu, action: 'tofu' },
  { index: 8, label: '保存食のおかず', img: jerky, action: 'jerky' },
  { index: 9, label: '乳製品のおかず', img: cheese, action: 'cheese' },
  { index: 10, label: 'サラダ', img: salad, action: 'salad' },
  { index: 11, label: 'スープ・汁もの', img: soup, action: 'soup' },
  { index: 12, label: 'ご飯もの', img: rice, action: 'rice' },
  { index: 13, label: '丼もの', img: ball, action: 'ball' },
  { index: 14, label: '鍋もの', img: pot, action: 'pot' },
  { index: 15, label: '麺料理', img: noodle, action: 'noodle' },
  { index: 16, label: 'その他', img: etc, action: 'etc' },
]

export const currentDate = moment().format('YYYY-MM-DD')

export const LS_USER_ID = 'userId'
