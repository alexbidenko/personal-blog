// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Александр Биденко - личный блог о технологиях',
    description: 'Изучаете ли вы технологии до момента, когда это просто работает, или же находите способы сделать код еще лучше изучая скрытые особенности технологий? Я отношусь ко второй категории людей. И в этом блоге я буду публиковать множество разных статей на темы, которые вы не найдете при поверхностном изучении.',
    image: 'https://avatars.githubusercontent.com/u/23550517?v=4',
    socials: {
      // twitter: 'nuxt_js',
      github: 'alexbidenko',
      // nuxt: {
      //   label: 'Nuxt',
      //   icon: 'simple-icons:nuxtdotjs',
      //   href: 'https://nuxt.com'
      // }
    },
    // github: {
    //   dir: '.starters/default/content',
    //   branch: 'main',
    //   repo: 'docus',
    //   owner: 'nuxt-themes',
    //   edit: true
    // },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
