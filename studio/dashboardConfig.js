export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62598b4f59fe1105d09068d1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8d2p785f',
                  apiId: 'c6c91cef-09bd-4299-8f8f-93323699683f'
                },
                {
                  buildHookId: '62598b5059fe1105d09068d2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8pb8ti3f',
                  apiId: '6f19b6cd-b889-4350-a10b-6dfa6d88ae22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SteveGus/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8pb8ti3f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
