/* vim: set ts=2 sw=2 et number nowrap: */
pages.proof=prnt=>{
  let variables = {};
  const persist = ()=>{
    const json = JSON.stringify({variables});
    localStorage.setItem('proof',json);
  };
  const load = ()=>{
    let json = localStorage.getItem('proof');
    if(json) {
      try {
        json = JSON.parse(json);
        variables = json.variables;
      } catch (error) {
        console.log(error);
      }
    }
  };
  load();
  const addDomain = domain => {
    variables[domain]={};
    persist();
  }
  const addVariable = (domain,variable) => {
    variables[domain][variable] = true;
    persist();
  };
  const createTextInput = (prnt, name, text) => {
    const div = xce('div');
    const label = xce('label');
    xsa(label,'for',name);
    xac(label,xctn(text));
    xac(div,label);
    const input = xce('input');
    input.type='text';
    input.name=name;
    xac(div,input);
    xac(prnt,div);
    return input;
  };
  const createSelect = (prnt, name, text) => {
    const div = xce('div');
    const label = xce('label');
    xsa(label,'for',name);
    xac(label,xctn(text));
    xac(div,label);
    const select = xce('select');
    select.name=name;
    xac(div,select);
    xac(prnt,div);
    return select;
  };
  const createOption = (prnt, value, display) => {
    const option = xce('option');
    option.value=value;
    xac(option,xctn(display));
    xac(prnt,option);
  };
	const newAxiom = xce('button');
  xac(newAxiom,xctn('New Axiom'));
  xon(newAxiom,'click',()=>{
    const div = xce('div');
    xac(div,xctn('New axiom'));
    const name = createTextInput(div, 'name', 'Name');
    const axdiv = xce('div');
    xac(div,axdiv);
    const save = xce('button');
    xac(save,xctn('Save'));
    xon(save,'click',()=>{
      xrm(div);
    });
    xac(div,save);
    const cancel = xce('button');
    xac(cancel,xctn('Cancel'));
    xon(cancel,'click',()=>{
      xrm(div);
    });
    xac(div,cancel);
    const validate = ()=>{
    };
    xon(domainInput,'input',name);
    xac(prnt,div);
  });
  xac(prnt,newAxiom);
	const newProof = xce('button');
  xac(newProof,xctn('New Proof'));
  xon(newProof,'click',()=>{
  });
  xac(prnt,newProof);
	const newDomain = xce('button');
  xac(newDomain,xctn('New Domain'));
  xon(newDomain,'click',()=>{
    const div = xce('div');
    const domainInput = createTextInput(
      div, 'domain', 'Domain name'
    );
    const save = xce('button');
    xac(save,xctn('Save'));
    xon(save,'click',()=>{
      const domain = domainInput.value;
      addDomain(domain);
      xrm(div);
    });
    xac(div,save);
    const cancel = xce('button');
    xac(cancel,xctn('Cancel'));
    xon(cancel,'click',()=>{
      xrm(div);
    });
    xac(div,cancel);
    xac(prnt,div);
    const validate = ()=>{
      const domain = domainInput .value;
      if(variables[domain] !== undefined) {
        save.disabled=true;
      } else {
        save.disabled=false;
      }
    };
    xon(domainInput,'input',validate);
  });
  xac(prnt,newDomain);
	const newVar = xce('button');
  xac(newVar,xctn('New Variable'));
  xon(newVar,'click',()=>{
    const div = xce('div');
    const domainLabel = xce('label');
    xac(domainLabel,xctn('Domain'));
    xac(prnt,domainLabel);
    const domainSelect = createSelect(div,'domain','Domain');
    for(const domain in variables) {
      createOption(domainSelect,domain,domain); 
    }
    const input = createTextInput(div, 'variable', 'Variable name');
    const save = xce('button');
    xac(save,xctn('Save'));
    xon(save,'click',()=>{
      const domain = domainSelect.value;
      const variable = input.value;
      addVariable(domain,variable);
      xrm(div);
    });
    xac(div,save);
    const cancel = xce('button');
    xac(cancel,xctn('Cancel'));
    xon(cancel,'click',()=>{
      xrm(div);
    });
    xac(div,cancel);
    xac(prnt,div);
    const validate = ()=>{
      const domain = domainSelect .value;
      const variable = input.value;
      if(!variable) {
        save.disabled=true;
      } else if(variables[domain] !== undefined) {
        if(variables[domain][variable]) {
          save.disabled=true;
        } else {
          save.disabled=false;
        }
      } else {
        save.disabled=true;
      }
    };
    xon(variableInput,'input',validate);
    xon(domainSelect,'change',validate);
  });
  xac(prnt,newVar);
	const newDef = xce('button');
  xac(newDef,xctn('New Definition'));
  xon(newDef,'click',()=>{
  });
  xac(prnt,newDef);
};
