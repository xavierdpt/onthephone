/* vim: set ts=2 sw=2 et number nowrap: */
pages.proof=prnt=>{
  const variables = {};
  const addDomain = domain => {
    variables[domain]={};
  }
	const newProof = xce('button');
  xac(newProof,xctn('New Proof'));
  xon(newProof,'click',()=>{
  });
  xac(prnt,newProof);
	const newDomain = xce('button');
  xac(newDomain,xctn('New Domain'));
  xon(newDomain,'click',()=>{
    const label = xce('label');
    xac(label,xctn('Domain name'));
    xac(prnt,label);
    const input = xce('input');
    input.type='text';
    xac(prnt,input);
    const save = xce('button');
    xac(save,xctn('Save'));
    xon(save,'click',()=>{
      const domain = input.value;
      addDomain(domain);
      xrm(label);
      xrm(input);
      xrm(save);
      xrm(cancel);
    });
    const cancel = xce('button');
    xac(cancel,xctn('Cancel'));
    xon(cancel,'click',()=>{
      xrm(label);
      xrm(input);
      xrm(save);
      xrm(cancel);
    });
    xac(prnt,newProof);
  });
  xac(prnt,newDomain);
	const newVar = xce('button');
  xac(newVar,xctn('New Variable'));
  xon(newVar,'click',()=>{
  });
  xac(prnt,newVar);
	const newDef = xce('button');
  xac(newDef,xctn('New Definition'));
  xon(newDef,'click',()=>{
  });
  xac(prnt,newDef);
};
