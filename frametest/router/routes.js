import moduleRouter from '@_core/_routerFiles'

const otherRouter = [
  {
    path: '*',
    redirect: '/404',
    meta: {
      auth: false
    }
  }
];
if({}){

}

export default moduleRouter.concat(otherRouter)
