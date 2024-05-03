module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'React component generator',
    prompts: [
      {
        type: 'input',
        name: 'component_name',
        message: 'Enter the component name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../components/{{pascalCase component_name}}/{{pascalCase component_name}}.tsx',
        templateFile: './template/component/component-template.hbs',
      },
      {
        type: 'add',
        path: '../components/{{pascalCase component_name}}/{{pascalCase component_name}}.stories.tsx',
        templateFile: './template/component/stories-template.hbs',
      },
      {
        type: 'add',
        path: '../components/{{pascalCase component_name}}/{{pascalCase component_name}}.test.tsx',
        templateFile: './template/component/test-template.hbs',
      },
    ],
  })
}
