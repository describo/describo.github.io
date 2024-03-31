---
title: Team
aside: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
    {
      avatar: 'https://github.com/marcolarosa.png',
      name: 'Dr Marco La Rosa',
      title: 'Project Lead and Core Developer',
      links: [
        { icon: 'github', link: 'https://github.com/marcolarosa' },
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/marcolarosa/' },
      ]
    },
    {
      avatar: 'https://github.com/beepsoft.png',
      name: 'Balazs E. Pataki',
      title: 'Primary Contributor',
      links: [
        { icon: 'github', link: 'https://github.com/beepsoft' },
      ]
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/61116319?v=4',
      name: 'Réka Csontos',
      title: 'Contributor',
      links: [
        { icon: 'github', link: 'https://github.com/csontosreka' },
      ]
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/65889343?v=4',
      name: 'Dr Mike Jones',
      title: 'Research Advisor - Archives and History',
      links: [
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/mike-jones-5504a871/' },
      ]
    },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers  :members="members" />

## Join us

Want to get involved?

Organisation is ad-hoc at the moment so the easiest way to get started is email Marco @ m@lr.id.au
and we can chat about how you can join the organisation.
