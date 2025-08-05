import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })

const userCanInviteSomeoneelse = ability.can('invite', 'User')
const userCanDeleteSomeoneelse = ability.can('delete', 'User')
const userCannotDeleteSomeoneelse = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneelse)
console.log(userCanDeleteSomeoneelse)
console.log(userCannotDeleteSomeoneelse)
