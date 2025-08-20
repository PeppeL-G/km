import { defineConfig } from 'vitepress'
import markdownItDirective from 'markdown-it-directive'
import markdownItContainer from 'markdown-it-container'
import { packageToUrl } from './theme/url-packager.ts'

function getPageCode(language, code){
  
  if(language == `html` && !code.startsWith(`<!DOCTYPE html>`)){
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Min titel</title>
</head>
<body>
  
  ${code.split(`\n`).map(l => `\t${l}`).join(`\n`).trim()}
  
</body>
</html>`
  
  }
  
  return code
  
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  base: `/km/`,
  
  lang: "sv-SE",
  title: "Kursmaterial",
  titleTemplate: false,
  description: "Kursmaterial av Peter L-G.",
  
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    
    nav: [{
      text: 'Koda online',
      items: [{
        text: 'HTML',
        link: '/koda-online/html/'
      }, {
        text: 'HTML och CSS',
        link: '/koda-online/html-och-css/'
      }, {
        text: 'HTML och JS',
        link: '/koda-online/html-och-js/'
      }, {
        text: 'JS',
        link: '/koda-online/js/'
      }],
    }, {
      text: 'Tester',
      items: [{
        text: `HTML Taggar`,
        link: `/tester/html-taggar/`
      }],
    }],
    
    outlineTitle: 'På den här sidan',
    docFooter: {
      prev: 'Tillbaka till',
      next: false,
    },
    darkModeSwitchLabel: 'Mörkt läge',
    sidebarMenuLabel: 'Meny',
    returnToTopLabel: 'Tillbaka till toppen',
    
    footer: {
      copyright: 'Copyright © 2025-nu Peter Larsson-Green'
    },
    
  },
  
  markdown: {
    
    lineNumbers: true,
    
    container: {
      tipLabel: `Tips`,
    },
    
    config(md){
      
      // Add rendered result from some code fences.
      const originalFence = md.renderer.rules.fence!
      
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        
        const token = tokens[idx]
        const info = token.info ? md.utils.unescapeAll(token.info).trim() : ''
        const lang = info.split(/\s+/g)[0]
        
        let originalHtml = originalFence(tokens, idx, options, env, self)
        
        if(lang == `html` || lang == `js`){
          originalHtml = originalHtml.replace(
            `<button title="Copy Code" class="copy"></button>`,
            `<a class="editCode" title="Ändra kod" href="/km/koda-online/${lang}#${packageToUrl(getPageCode(lang, token.content))}" target="_blank"></a><button title="Kopiera kod" class="copy"></button>`,
          )
        }
        
        if(lang == `html` && info.includes(`result`)){
          
          let html = ``
          
          if(!info.includes(`no-code`)){
            html += originalHtml
          }
          
          html += `
            <div class="result${
              info.includes(`no-code`) ? ` no-top-border` : ``
            }">
              <iframe
                src="/km/html-resultat.html${
                  info.includes(`no-code`) ? `?remove-result-header` : ``
                }#${encodeURIComponent(token.content)}"
              >
              </iframe>
            </div>
          `
          
          return html
          
        }
        
        return originalHtml
        
      }
      
      md.use(markdownItDirective)
      
      md.use(markdownItContainer, 'example', {
        render(tokens, idx) {
          
          const token = tokens[idx]
          
          if (token.nesting === 1) {
            // Opening tag
            return `
            <div class="custom-block custom-block-example">\n
              <p class="custom-block-title custom-block-title-default">Exempel</p>\n`
          } else {
            // Closing tag
            return `
              </div>\n
            `
          }
          
        }
      })
      
      md.use(markdownItContainer, 'exercise', {
        render(tokens, idx) {
          
          const token = tokens[idx]
          
          const exerciseNumber = tokens[idx].info.trim().match(/(\d|\.)+/)?.[0] ?? ``
          
          
          if (token.nesting === 1) {
            // Opening tag
            return `
            <div class="custom-block custom-block-exercise">\n
              <p class="custom-block-title custom-block-title-default">Övning ${exerciseNumber}</p>\n`
          } else {
            // Closing tag
            return `
              </div>\n
            `
          }
          
        }
      })
      
    },
  },
  
})