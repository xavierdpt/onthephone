/* vim: set ts=2 sw=2 et number nowrap: */
pages.proof=prnt=>{
  const variables = {};
  const addDomain = domain => {
    variables[domain]={};
  }
  const addVariable = (domain,variable) => {
    variables[domain][variable] = true;
  };
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
    xac(prnt,save);
    const cancel = xce('button');
    xac(cancel,xctn('Cancel'));
    xon(cancel,'click',()=>{
      xrm(label);
      xrm(input);
      xrm(save);
      xrm(cancel);
    });
    xac(prnt,cancel);
  });
  xac(prnt,newDomain);
	const newVar = xce('button');
  xac(newVar,xctn('New Variable'));
  xon(newVar,'click',()=>{
    const domainLabel = xce('label');
    xac(domainLabel,xctn('Domain'));
    xac(prnt,domainLabel );
    const domainSelect = xce('select');
    for(domain in variables) {
      const option = xce('option');
      option.name=domain;
      xac(option,xctn(domain));
      xac(domainSelect ,option);
    }
    xac(prnt,domainSelect );
    const label = xce('label');
    xac(label,xctn('Variable name'));
    xac(prnt,label);
    const input = xce('input');
    input.type='text';
    xac(prnt,input);
    const save = xce('button');
    xac(save,xctn('Save'));
    xon(save,'click',()=>{
      const domain = domainSelect.value;
      const variable = input.value;
      addVariable(domain,variable);
      xrm(domainLabel);
      xrm(domainSelect);
      xrm(label);
      xrm(input);
      xrm(save);
      xrm(cancel);
    });
    xac(prnt,save);
    const cancel = xce('button');
    xac(cancel,xctn('Cancel'));
    xon(cancel,'click',()=>{
      xrm(domainLabel);
      xrm(domainSelect);
      xrm(label);
      xrm(input);
      xrm(save);
      xrm(cancel);
    });
    xac(prnt,cancel);
  });
  });
  xac(prnt,newVar);
	const newDef = xce('button');
  xac(newDef,xctn('New Definition'));
  xon(newDef,'click',()=>{
  });
  xac(prnt,newDef);
};
