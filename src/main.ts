import * as exec from '@actions/exec'
            apiKey: core.getInput('openai-api-key'),
        let diff: string = ''
              diff += data.toString()
        await exec.exec('git', ['diff', 'HEAD', core.getInput('base-sha')], options)
                { role: 'user', content: diff }