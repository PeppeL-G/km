import { defineConfig } from 'vitepress'
import markdownItDirective from 'markdown-it-directive'
import markdownItContainer from 'markdown-it-container'
import { packageToUrl } from './theme/url-packager.ts'
import { slugify } from '@mdit-vue/shared'

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

function getISOWeekNumber(date: Date){
  const tmpDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number (Monday=1, Sunday=7)
  const dayNum = tmpDate.getUTCDay() || 7; // Sunday=0 -> 7
  tmpDate.setUTCDate(tmpDate.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(tmpDate.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((tmpDate - yearStart) / 86400000 + 1) / 7);
  return weekNo;
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
        
        const originalHtml = originalFence(tokens, idx, options, env, self).replace(
          `<button title="Copy Code" class="copy"></button>`,
          `<a class="editCode" title="Ändra kod" href="/koda-online/${lang}#${packageToUrl(getPageCode(lang, token.content))}" target="_blank"></a><button title="Kopiera kod" class="copy"></button>`,
        )
        
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
                src="/html-resultat.html${
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
      
      md.inlineDirectives[`lesson-number`] = ({state, content, dests, attrs, contentStart, contentEnd, directiveStart, directiveEnd}) => {
        
        const filePath = state.env.relativePath
        
        const courseFolderName = filePath.split(`/`)[0]
        
        const course = courses.find(
          c => c.folderName == courseFolderName,
        )!
        
        const fileName = filePath.split(`/`).at(-1)
        
        const lesson = course.lessons.find(
          l => `${l.fileName}.md` == fileName,
        )!
        
        const token = state.push('html_inline', '', 0)
        token.content = `${lesson.number}.`
        
      }
      
      md.blockDirectives['lessons'] = ({
        state, content, contentTitle, inlineContent, dests, attrs,
        contentStartLine, contentEndLine,
        contentTitleStart, contentTitleEnd,
        inlineContentStart, inlineContentEnd,
        directiveStartLine, directiveEndLine
      }) => {
        
        const token = state.push('html_block', '', 0)
        token.map = [directiveStartLine, directiveEndLine]
        
        const filePath = state.env.relativePath
        
        const courseFolderName = filePath.split(`/`)[0]
        
        const course = courses.find(
          c => c.folderName == courseFolderName,
        )!
        
        const tableBodyTrs = course.lessons.map((l, i) => {
          
          const hadPreviousLessonSameDate = course.lessons[i-1]?.date == l.date
          const rowspan = course.lessons.filter(l2 => l2.date == l.date).length
          
          const weekNumber = getISOWeekNumber(new Date(l.date))
          const weekdayName = new Intl.DateTimeFormat(
            'sv-SE',
            { weekday: 'long' },
          ).format(new Date(l.date))
          
          return `
            <tr>
              ${
                hadPreviousLessonSameDate ?
                `` :
                `
                  <td rowspan=${rowspan}>${weekNumber}</td>
                  <td rowspan=${rowspan}>${weekdayName}</td>
                  <td rowspan=${rowspan}>${l.date}</td>
                `
              }
              <td>
                <a href="lektioner/${l.fileName}.html">
                  ${l.number}. ${md.utils.escapeHtml(l.name)}
                </a>
              </td>
              <td class="content">
                <ul>
                  ${l.parts.map(
                    p => `
                      <li>
                        <a href="lektioner/${l.fileName}.html#${slugify(p)}">
                          ${p}
                        </a>
                      </li>
                    `,
                  ).join(``)}
                </ul>
              </td>
            </tr>
          `
          
        })
        
        token.content = `
          <table class="lessons">
            <thead>
              <tr>
                <th>Vecka</th>
                <th>Dag</th>
                <th>Datum</th>
                <th>Lektion</th>
                <th>Innehåll</th>
              </tr>
            </thead>
            <tbody>
              ${tableBodyTrs.join(``)}
            </tbody>
          </table>
        `
        
      }
      
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
      
    },
  },
  
  transformPageData(pageData, ctx){
    
    if(pageData.relativePath.match(/-\d/)){
      
      const courseFolderName = pageData.relativePath.split(`/`)[0]
      
      const course = courses.find(
        c => c.folderName == courseFolderName,
      )
      
      pageData.title = course.name
      
      if(pageData.relativePath.includes(`lektioner`)){
        
        const lessonFileName = pageData.relativePath.split(
          `/`,
        ).at(
          -1,
        )!.split(
          `.md`,
        )[0]
        
        const lesson = course.lessons.find(
          l => l.fileName == lessonFileName,
        )
        
        pageData.frontmatter.prev = {
          text: course.name,
          link: `/${course.folderName}/`,
        }
        
        pageData.title += ` → ${lesson.name}`
        
      }
      
    }
    
  },
  
})