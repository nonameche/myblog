import React from 'react'

import { QqOutlined } from '@ant-design/icons'

// components
import { Divider, Rate } from 'antd'
import Href from '@/components/Href'
import SvgIcon from '@/components/SvgIcon'

const skills = [
  {
    label: '具备扎实的 Javascript 基础，熟练使用 ES6+ 语法。',
    rate: 3
  },
  {
    label: '熟悉 Vue 并理解其原理，熟悉 react 框架及其用法，熟悉小程序及其用法',
    rate: 3
  },
  {
    label: '熟练使用 Webpack 打包工具，熟悉常用工程化和模块化方案。',
    rate: 3
  },
  {
    label: '熟悉 Koa、Mysql，针对需求可以做到简单的数据库设计、接口的开发与设计！',
    rate: 2
  },
  {
    label: '熟悉 HTTP 协议，缓存、性能优化、安全等，了解浏览器原理。',
    rate: 2
  },
  {
    label: '熟悉常用的算法与数据结构',
    rate: 2
  }
]

const MyInfo = () => {
  return <>
    <Divider orientation='left'>胡言乱语</Divider>
    <ul>
      <li>作为一个好奇心如黑洞星人，平时最大的乐趣就是捣鼓电脑了，比如开发旁门左道的东西，探索千奇百怪的网站，寻觅好用小众的软件，尝试化腐为奇的插件……
      </li>
      <li>
自律使人自由，分享使人快乐，这是我的座右铭，这也是我开发这个网站的原因。除了记录下前端进阶之路上的花式踩坑与学习心得，我也想把我这么多年来搜集的好玩的，有趣的，有用的东西分享给大家，和大家一起踩前端之坑、览网站之美、究工具之用、享冲浪之趣！
      </li>
    </ul>
    <Divider orientation='left'>左道旁门</Divider>
    <ul>
      <li>踩前端之坑 ———— 前端菜鸡，专业摸鱼，踩过的坑比吃过的辣椒还多！！！只有你想不到，没有我踩不到！</li>
      <li>览网站之美 ———— 以行业领域或者网站风格分类，感受人性化的交互设计，享受互联网的视觉精彩！</li>
      <li>究工具之用 ———— 知识学习、影音资源、行业数据、在线工具、艺术设计、素材模板……你想要的这儿不一定都有，但这里肯定有你想要的！</li>
      <li>享冲浪之趣 ———— 公益宣传、创意恶搞、无聊巨著、轻松有趣、莫名其妙、千奇百怪等等等等，脑洞堪比银河系！</li>
    </ul>
    <Divider orientation='left'>自报家门</Divider>

    <ul className='about-list'>
      <li>江湖人称：黑面书生</li>
      <li>卑微自称：李小黑</li>
      <li>冲浪专称：nonameche</li>
      <li>
        一起吹水：
        <QqOutlined /> 946145605
        <Divider type='vertical' />
        <SvgIcon type='iconemail' style={{ marginRight: 5, transform: 'translateY(2px)' }} />
        <a href='mailto:946145605@qq.com'>946145605@qq.com</a>
      </li>
      <li>何方妖孽：好奇心如黑洞星人</li>
      <li>
        频繁出没：
        <Href href='https://juejin.im/user/5acac6c4f265da2378408f92'>掘金主页</Href>
      </li>
      <li>
        吃饭必备
        <ul>
          {skills.map((item, i) => (
            <li key={i}>
              {item.label}
              <Rate defaultValue={item.rate} disabled />
            </li>
          ))}
        </ul>
      </li>
      <li>
        自吹自擂
        <ul>
          <li>技术宅：热爱编程、自学技术、
学以致用力MAX</li>
          <li>探索者：好奇心强、敢于尝试、
求知学习力MAX</li>
          <li>工具控：热衷尝鲜、发掘小众、
神器嗅探力MAX</li>
          <li>工作狂：皮实耐操、积极进取、
抗压调节力MAX</li>
          <li>细节帝：认真细心、责任心强、
追求极致力MAX</li>
          <li>多面手：理解力强、善于沟通、
团结协作力MAX</li>
        </ul>
      </li>
      <li>
        商业自吹
        <ul>
          <li>搜索能力强：只有想不到，没有搜不到</li>
          <li>开发效率高：善用各种工具,神器提升开发效率、减少重复性与低技术含量工作</li>
          <li>学习能力强：能够快速学习掌握新的技能、工具，满足实际工作需要</li>
          <li>能解决问题：只要思想不滑坡，办法总比困难多，能够利用多手段另辟蹊径解决问题</li>
        </ul>
      </li>
      <li>
        四大癖好
        <ul>
          <li>编程</li>
          <li>阅读</li>
          <li>运动</li>
          <li>历史</li>
        </ul>
      </li>
    </ul>
  </>
}

export default MyInfo
