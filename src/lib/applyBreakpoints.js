import { addPrefixedClasses } from './index'

export default function( { sm, lg, xl, xxl, props }, defaultClasses) {
  if(sm !== undefined)
    addPrefixedClasses('sm', props, typeof sm === 'string' ? sm.split(' ') : defaultClasses)
  if(lg !== undefined)
    addPrefixedClasses('lg', props, typeof lg === 'string' ? lg.split(' ') : defaultClasses)
  if(xl !== undefined)
    addPrefixedClasses('xl', props, typeof xl === 'string' ? xl.split(' ') : defaultClasses)
  if(xxl !== undefined)
    addPrefixedClasses('xxl', props, typeof xxl === 'string' ? xxl.split(' ') : defaultClasses)
}