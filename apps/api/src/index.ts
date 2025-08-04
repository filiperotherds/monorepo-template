import { ability } from '@saas/auth'

const userCanInviteSomeoneelse = ability.can('invite', 'User')

console.log(userCanInviteSomeoneelse)