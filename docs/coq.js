pages.coq = (prnt) => {
  // TODO: Factor with postgresql.js
  const text = (txt) => {};
  const part = (num, name) => {};
  const chapter = (name) => {};
  const section = (title) => {};
  const subsection = (title) => {};
  const subsubsection = (title) => {};
  const appendix = (letter, title) => {};

  part("Specification Language");
  {
    chapter("Core language");
    {
      section("Basic notions and conventions");
      {
        subsection("Syntax and lexical conventions");
        {
          subsubsection("Syntax conventions");
          subsubsection("Lexical conventions");
        }
        subsection("Essential vocabulary");
        subsection("Settings");
        {
          subsubsection("Attributes");
          subsubsection("Flags, Options and Tables");
        }
      }
      section("Sorts");
      {
      }
      section("Functions and assumptions");
      {
        subsection("Binders");
        subsection("Functions (fun) and function types (forall)");
        subsection("Function application");
        subsection("Assumptions");
      }
      section("Definitions");
      {
        subsection("Let-in definitions");
        subsection("Type cast");
        subsection("Top-level definitions");
        subsection("Assertions and proofs");
      }
      section("Conversion rules");
      {
        subsection("alpha-conversion");
        subsection("beta-reduction");
        subsection("delta-reduction");
        subsection("iota-reduction");
        subsection("zeta-reduction");
        subsection("eta-expansion");
        subsection("Examples");
        subsection("Proof Irrelevance");
        subsection("Convertibility");
      }
      section("Typing rules");
      {
        subsection("The terms");
        subsection("Typing rules");
        subsection("Subtyping rules");
        subsection("Admissible rules for global environments");
        subsection("The Calculus of Inductive Constructions with impredicative Set");
      }
      section("Variants and the match construct");
      {
        subsection("Variants");
        {
          subsubsection("Private (matching) inductive types");
        }
        subsection("Definition by cases: match");
      }
      section("Record types");
      {
        subsection("Defininin record types");
        subsection("Constructing records");
        subsection("Accessing fields (projections)");
        subsection("Settings for printing records");
        subsection("Primitive Projections");
        {
          subsubsection("Reduction");
          subsubsection("Compatibility Projections and match");
        }
      }
      section("Inductive types and recursive functions");
      {
        subsection("Inductive types");
        {
          subsubsection("Simple inductive types");
          subsubsection("Simple annotated inductive types");
          subsubsection("Parameterized inductive types");
          subsubsection("Mutually defined inductive types");
        }
        subsection("Recursive functions: fix");
        subsection("Top-level recursive functions");
        subsection("Theory of inductive definitions");
        {
          subsubsection("Types of inductive objects");
          subsubsection("Well-formed inductive definitions");
          subsubsection("Destructors");
          subsubsection("Fixpoint definitions");
        }
      }
      section("Coninductive types and recursive functions");
      {
        subsection("Coinductive types");
        {
          subsubsection("Caveat");
        }
        subsection("Co-recusrive functions: cofix");
        subsection("Tope-level definitions of corecursive functions");
      }
      section("Section mechanism");
      {
      }
      section("The Module System");
      {
        subsection("Modules and module types");
        subsection("Using modules");
        {
          subsubsection("Examples");
        }
        subsection("Typing Modules");
        subsection("Qualified names");
        subsection("Controlling the scope of commands with locality attributes");
      }
      section("Primitive objects");
      {
        subsection("Primitive Integers");
        subsection("Primitive Floats");
        subsection("Primitive Arrays");
      }
      section("Polymorphic Universes");
      {
        subsection("General Presentation");
        subsection("Polymorphic, Monomorhpic");
        subsection("Cumulative, NonCumulative");
        {
          subsubsection("Specifying cumulativity");
          subsubsection("Cumulativity Weak Constraints");
        }
        subsection("Global and local universes");
        subsection("Conversion and unification");
        subsection("Minimization");
        subsection("Explicit Universes");
        subsection("Printing universes");
        {
          subsubsection("Polymorphic definitions");
        }
        subsection("Universe polymorphism and sections");
      }
      section("SProp (proof irrelevant propositions)");
      {
        subsection("Basic constructs");
        subsection("Encoding for strict propositions");
        subsection("Definitional UIP");
        {
          subsubsection("Non Termination with UIP");
        }
        subsection("Issues with non-cumulativity");
      }
    }
    chapter("Language extensions");
    {
      section("Existential variables");
      {
        subsection("Inferable subterms");
        subsection("e* tactics taht create existential variables");
        subsection("Automatic resolution of existential variables");
        subsection("Explicit display of existential instances for pretty-printing");
        subsection("Solving existential vairables using tactics");
      }
      section("Implicit arguments");
      {
        subsection("The different kinds of implicit arguments");
        {
          subsubsection("Implicit arguments inferable from the knowledge of other arguments of a function");
          subsubsection("Implicit arguments inferable by resolution");
        }
        subsection("Maximal and non-maximal insertion of implicit arguments");
        {
          subsubsection("Trailing Implicit Arguments");
        }
        subsection("Casual use of implicit arguments");
        subsection("Declaration of implicit arguments");
        {
          subsubsection("Implicit Argument Binders");
          subsubsection("Mode for automatic declaration of implicit arguments");
          subsubsection("Controlling strict implicit arguments");
          subsubsection("Controlling contextual implicit arguments");
          subsubsection("Controlling reversible-pattern implicit arguments");
          subsubsection("Controlling the inersion of implicit arguments not followed by explicit arguments");
          subsubsection("Combining manual declaration and automatic declaration");
        }
        subsection("Explicit applications");
        subsection("Displaying implicit arguments");
        subsection("Displaying implicit arguments when pretty-printing");
        subsection("Interaction with subtyping");
        subsection("Deactivation of implicit arguments for parsing");
        subsection("Implicit types of variables");
        subsection("Implicit generalization");
      }
      section("Extended pattern matching");
      {
        subsection("Variants and extensions of match");
        {
          subsubsection("Multiple and nested pattern matching");
          subsubsection("Pattern-matching on boolean values: the if expression");
          subsubsection("Irrefutable patterns: the destructuring let variants");
          subsubsection("Controlling pretty-printing of match expressions");
          subsubsection("Conventions about unused pattern-matching variables");
        }
        subsection("Patterns");
        subsection("Multiple patterns");
        subsection("Aliasing subpatterns");
        subsection("Nested patterns");
        subsection("Disjunctive patterns");
        subsection("About patterns of parametric types");
        {
          subsubsection("Parameters in patterns");
        }
        subsection("Implicit arguments in patterns");
        subsection("Matching objects of dependent types");
        subsection("Understanding dependencies in patterns");
        subsection("When the elimination predicate must be provided");
        {
          subsubsection("Dependent pattern matching");
          subsubsection("Multiple dependent pattern matching");
          subsubsection("Patterns in 'in'");
        }
        subsection("Using pattern matching to write proofs");
        subsection("Pattern-matching on inductive objects involving local definitions");
        subsection("Pattern-matching and coercion");
        subsection("When does the expansion strategy fail?");
      }
      section("Syntax extensions and notation scopes");
      {
        subsection("Notations");
        {
          subsubsection("Basic notations");
          subsubsection("Precedences and associativity");
          subsubsection("Complex notations");
          subsubsection("Simple factorization rules");
          subsubsection("Use of notations for printing");
          subsubsection("The Infix command");
          subsubsection("Reserving notations");
          subsubsection("Simulatenous definitions of terms and notations");
          subsubsection("Enabling and disabling notations");
          subsubsection("Displaying information about notations");
          subsubsection("Locating notations");
          subsubsection("Inheritance of the properties of arguments of constants bound to a notation");
          subsubsection("Notations and binders");
          subsubsection("Notations with recursive patterns");
          subsubsection("Notations with recusrive patterns involving binders");
          subsubsection("Predefined entries");
          subsubsection("Custom entries");
          subsubsection("Syntax");
        }
        subsection("Notation scopes");
        {
          subsubsection("Global interpration rules for notations");
          subsubsection("Local interpretation rules for notations");
          subsubsection("The type_scope notation scope");
          subsubsection("The function_scope notation scope");
          subsubsection("Notation scopes used in the standard library of Coq");
          subsubsection("Displaying information about scopes");
        }
        subsection("Abbreviations");
        subsection("Numbers and strings");
        {
          subsubsection("Number notations");
          subsubsection("String notations");
        }
        subsection("Tactic Notations");
      }
      section("Setting properties of a function's arguments");
      {
        subsection("Manual declaration of implicit arguments");
        subsection("Automatic declaration of implicit arguments");
        subsection("Renaming implicit arguments");
        subsection("Binding arguments to scopes");
        subsection("Effects of Arguments on unfolding");
        subsection("Bidirectionality hints");
      }
      section("Implicit coercions");
      {
        subsection("General Presentation");
        subsection("Classes");
        subsection("Coercions");
        subsection("Reversible Coercions");
        subsection("Identity Coercions");
        subsection("Inheritance Graph");
        subsection("Declaring Coercions");
        subsection("Displaying Available Coercions");
        subsection("Activating the Printing of Coercions");
        subsection("Classes as Records");
        subsection("Coercions and Sections");
        subsection("Coercions and Modules");
        subsection("Examples");
      }
      section("Typeclasses");
      {
        subsection("Class and Instance declarations");
        subsection("Binding classes");
        subsection("Parametrized Instances");
        subsection("Sections and contexts");
        subsection("Building hierarchies");
        {
          subsubsection("Superclasses");
          subsubsection("Substructures");
        }
        subsection("Summary of the commands");
        {
          subsubsection("Typeclasses Transparent, Typeclasses Opaque");
          subsubsection("Settings");
          subsubsection("Typeclasses eauto");
        }
      }
      section("Canonical Structures");
      {
        subsection("Declaration of canonical structures");
        subsection("Notation overloading");
        {
          subsubsection("Derived Canonical Structures");
        }
        subsection("Hierarchy of structures");
        {
          subsubsection("Compact declarations of Canonical Structures");
        }
      }
      section("Program");
      {
        subsection("Elaborating programs");
        {
          subsubsection("Syntactic control over equalities");
          subsubsection("Program Definitions");
          subsubsection("Program Fixpoint");
          subsubsection("Program Lemma");
        }
        subsection("Solving obligations");
        subsection("Frequently Asked Questions");
      }
      section("Commands");
      {
        subsection("Displaying");
        subsection("Query commands");
        subsection("Requests to the environment");
        subsection("Printing flags");
        subsection("Loading files");
        subsection("Compiled files");
        subsection("Load paths");
        subsection("Extra Dependencies");
        subsection("Backtracking");
        subsection("Quitting and debugging");
        subsection("Controlling display");
        subsection("Printing constructions in full");
        subsection("Controlling Typing Flags");
        subsection("Internal registration commands");
        {
          subsubsection("Exposing constants to OCaml libraries");
          subsubsection("Inlining hints for the fast resudction machines");
          subsubsection("Registering primitive operations");
        }
      }
    }
  }
  part("Proofs");
  {
    chapter("Basic proof writing");
    {
      section("Proof mode");
      {
        subsection("Proof state");
        subsection("Entering and exiting proof mode");
        {
          subsubsection("Proof using options");
          subsubsection("Name a set of section hypotheses for 'Proof using'");
        }
        subsection("Proof modes");
        subsection("Managing goals");
        {
          subsubsection("Focusing goals");
          subsubsection("Shelving goals");
          subsubsection("Reordering goals");
        }
        subsection("Proving a subgoal as a separate lemma: abstract");
        subsection("Requesting information");
        subsection("Showing differences between proof steps");
        {
          subsubsection("How to enable diffs");
          subsubsection("How diffs are calculated");
          subsubsection('"Show Proof" differences');
        }
        subsection("Delaying solving unification constraints");
        subsection("Proof maintenance");
        subsection("Controlling proof mode");
        subsection("Controlling memory usage");
      }
      section("Tactics");
      {
        subsection("Common elements of tactics");
        {
          subsubsection("Reserved keywords");
          subsubsection("Invocation of tactics");
          subsubsection("Bindings");
          subsubsection("Intro patterns");
          subsubsection("Ooccurence clauses");
        }
        subsection("Applying theorems");
        subsection("Managing the local context");
        subsection("Controlling the proof flow");
        subsection("Classical tactics");
        subsection("Performance-orientd tactic variants");
      }
      section("Reasoning with equalities");
      {
        subsection("Tactics for simple equalities");
        subsection("Rewriting with Leibniz and setoid equality");
        subsection("Rewriting with definitional equality");
        subsection("Applying conversion rules");
        {
          subsubsection("Fast reduction tactics: vm_compute and native_compute");
          subsubsection("Computing in a term: eval and Eval");
        }
        subsection("Controlling reduction strategies and the conversion algorithm");
      }
      section("Reasoning with inductive types");
      {
        subsection("Applying constructors");
        subsection("Case analysis");
        subsection("Induction");
        subsection("Equality of inductive types");
        {
          subsubsection("Helper tactics");
        }
        subsection("Generation of induction principles with Scheme");
        {
          subsubsection("Automatic declaration of schemes");
          subsubsection("Combined Scheme");
        }
        subsection("Generation of inversion principles with Derive Inversion");
        subsection("Examples of dependent destruction/dependent induction");
        {
          subsubsection("A larger example");
        }
      }
      section("The SSReflect proof language");
      {
        subsection("Introduction");
        {
          subsubsection("Acknowledgements");
        }
        subsection("Usage");
        {
          subsubsection("Getting started");
          subsubsection("Compatibility issues");
        }
        subsection("Gallina extensions");
        {
          subsubsection("Pattern assignment");
          subsubsection("Pattern conditional");
          subsubsection("Parametric polymorphism");
          subsubsection("Anonymous arguments");
          subsubsection("Wildcards");
          subsubsection("Definitions");
          subsubsection("Abbreviations");
          subsubsection("Basic localization");
        }
        subsection("Basic tactics");
        {
          subsubsection("Bookkeeping");
          subsubsection("The defective tactics");
          subsubsection("Discharge");
          subsubsection("Introduction in the context");
          subsubsection("Generation of equations");
          subsubsection("Type families");
        }
        subsection("Control flow");
        {
          subsubsection("Indentation and bullets");
          subsubsection("Terminators");
          subsubsection("Selectors");
          subsubsection("Iteration");
          subsubsection("Localization");
          subsubsection("Structure");
        }
        subsection("Rewriting");
        {
          subsubsection("An extended rewrite tactic");
          subsubsection("Remarks and examples");
          subsubsection("Rewriting under binders");
          subsubsection("Locking, unlocking");
          subsubsection("Conguence");
        }
        subsection("Contextual patterns");
        {
          subsubsection("Syntax");
          subsubsection("Matching contextual patterns");
          subsubsection("Examples");
          subsubsection("Patterns for recurrent contexts");
        }
        subsection("Views and reflection");
        {
          subsubsection("Interpreting eliminations");
          subsubsection("Interpreting assumptions");
          subsubsection("Interpreting goals");
          subsubsection("Boolean reflection");
          subsubsection("The reflect predicate");
          subsubsection("General mechanism for interpreting goals and assumptions");
          subsubsection("Interpreting equivalences");
          subsubsection("Declaring new Hint Views");
          subsubsection("Multiple views");
        }
        subsection("Synopsis and Index");
        {
          subsubsection("Parameters");
          subsubsection("Items and switches");
          subsubsection("Tactics");
          subsubsection("Tacticals");
          subsubsection("Commands");
          subsubsection("Settings");
        }
      }
    }
    chapter("Automatic solvers and programmable tactics");
    {
      section("Solvers for logic and equality");

      section("Micromega: solvers for arithmetic goals over ordered rings");
      {
        subsection("Short description of the tactics");
        subsection("Positivstellensatz refutations");
        subsection("lia: a decition procedure for linear real and rational arithmetic");
        {
          {
            subsubsection("High level view of lia");
            subsubsection("Cutting plane proofs");
            subsubsection("Case split");
          }
        }
        subsection("nra: a proof procedure for non-linear arithmetic");
        subsection("nia: a proof procedure for non-linear integer arithmetic");
        subsection("psatz: a proof procedure for non-linear arithmetic");
        subsection("zify: pre-processing of arithmetic goals");
      }
      section("ring and field: sovlers for polynomial and rational equations");
      {
        subsection("What does this tactic do?");
        subsection("The variables map");
        subsection("Is it automatic?");
        subsection("Concrete usage in Coq");
        subsection("Adding a ring structure");
        subsection("How does it work?");
        subsection("Dealing with fields");
        subsection("Adding a new field structure");
        subsection("History of ring");
        subsection("Discussion");
      }
      section("Nsatz: a solver for equalities in integral domains");
      {
        subsection("More about nsatz");
      }
      section("Programmable proof search");
      {
        subsection("Hint database");
        subsection("Creating Hint databases");
        subsection("Creating Hints");
        subsection("Hint databases defined in Coq standard library");
        subsection("Hint locality");
        subsection("Setting implicit automation tactics");
      }
      section("Generalized rewriting");
      {
        subsection("Introduction to generalized rewriting");
        {
          subsubsection("Relations and morphisms");
          subsubsection("Adding new relations and morphisms");
          subsubsection("Rewriting and nonreflexive relations");
          subsubsection("Rewriting and nonsymmetric relations");
          subsubsection("Rewriting in ambiguous setoid contexts");
          subsubsection("Rewriting with Type valued relations");
        }
        subsection("Declaring rewrite relations");
        subsection("Commands and tactics");
        {
          subsubsection("First class setoids and morphisms");
          subsubsection("Tactics enabled on user provided relations");
          subsubsection("Printing relations and morphisms");
          subsubsection("Deprecated syntax and backward incompatibilities");
        }
        subsection("Extensions");
        {
          subsubsection("Rewriting under binders");
          subsubsection("Subrelations");
          subsubsection("Constant unfolding");
        }
        subsection("Strategies for rewriting");
        {
          subsubsection("Usage");
          subsubsection("Definitions");
        }
      }
    }
    chapter("Creating new tactics");
    {
      section("Ltac");
      {
        subsection("Syntax");
        subsection("Values");
        {
          subsubsection("Syntactic values");
          subsubsection("Substitution");
          subsubsection("Local definitions: let");
          subsubsection("Function construction and application");
          subsubsection("Tactic in terms");
        }
        subsection("Goal selectors");
        subsection("Processing multiple goals");
        subsection("Branching and backtracking");
        subsection("Control flow");
        {
          subsubsection("Sequence: ;");
          subsubsection("Do loop");
          subsubsection("Repeat loop");
          subsubsection("Catching errors: try");
          subsubsection("Conditional branching: tryif");
        }
        subsection("Alternatives");
        {
          subsubsection("Branching with backtracking: +");
          subsubsection("Local application of tracitcs: [> ...]");
          subsubsection("First tactic to succeed");
          subsubsection("Solving");
          subsubsection("First tactic to make progress: ||");
          subsubsection("Detecting progress");
        }
        subsection("Success and failure");
        {
          subsubsection("Checking for success: assert_succeeds");
          subsubsection("Checking for failure: assert_fails");
          subsubsection("Failing");
          subsubsection("Soft cut: once");
          subsubsection("Checking for a single success: exactly_once");
        }
        subsection("Manipulating values");
        {
          subsubsection("Pattern matching on terms: match");
          subsubsection("Pattern matching on goals and hypotheses: match goal");
          subsubsection("Filling a term context");
          subsubsection("Generating fresh hypothesis names");
          subsubsection("Computing in a term: eval");
          subsubsection("Getting the type of a term");
          subsubsection("Manipulating untyped terms: type_term");
          subsubsection("Counting goals: numgoals");
          subsubsection("Testing boolean expressions: guard");
          subsubsection("Checking properties of terms");
        }
        subsection("Timing");
        {
          subsubsection("Timeout");
          subsubsection("Timing a tactic");
          subsubsection("Timing a tactic that evaluates to a term: time_constr");
        }
        subsection("Print/identity tactic: idtac");
        subsection("Tactic toplevel definitions");
        {
          subsubsection("Defining Ltac symbols");
          subsubsection("Printing Lta tactics");
        }
        subsection("Example of using Ltac");
        {
          subsubsection("Proof taht the natural numbers have at least two elements");
          subsubsection("Proving that a list is a permutation of a second list");
          subsubsection("Deciding intuitionistic propositional logic");
          subsubsection("Deciding type isomorphisms");
        }
        subsection("Debugging Ltac tactics");
        {
          subsubsection("Backtraces");
          subsubsection("Tracing execution");
          subsubsection("Interactive debugger");
          subsubsection("Profling Ltac tactics");
          subsubsection("Run-time optimization tactic");
        }
      }
      section("Ltac2");
      {
        subsection("General design");
        subsection("ML component");
        {
          subsubsection("Overview");
          subsubsection("Type Syntax");
          subsubsection("Type declarations");
          subsubsection("APIs");
          subsubsection("Term Syntax");
          subsubsection("Ltac2 Definitions");
          subsubsection("Printing Ltac2 tactics");
          subsubsection("Reduction");
          subsubsection("Typing");
          subsubsection("Effets");
        }
        subsection("Meta-programming");
        {
          subsubsection("Overview");
          subsubsection("Quotations");
          subsubsection("Term Antiquotations");
          subsubsection("Match over terms");
          subsubsection("Match over goals");
          subsubsection("Match on values");
        }
        subsection("Notations");
        {
          subsubsection("Abbreviations");
          subsubsection("Defining tactics");
          subsubsection("Syntactic classes");
        }
        subsection("Evaluation");
        subsection("Debug");
        subsection("Compatibility layer with Ltac1");
        {
          subsubsection("Ltac1 from Ltac2");
          subsubsection("Ltac2 from Ltac1");
          subsubsection("Switching between Ltac languages");
        }
        subsection("Transition from Ltac1");
        {
          subsubsection("Syntax changes");
          subsubsection("Tactic delay");
          subsubsection("Variable binding");
          subsubsection("Exception catching");
        }
      }
    }
  }
  part("Using Coq");
  {
    chapter("Libraries and plugins");
    {
      section("The Coq library");
      {
        subsection("The prelude");
        {
          subsubsection("Notations");
          subsubsection("Logic");
          subsubsection("Datatypes");
          subsubsection("Specification");
          subsubsection("Basic Arithmetic");
          subsubsection("Well-founded recursion");
          subsubsection("Accessing the Type level");
          subsubsection("Tactics");
        }
        subsection("The standard library");
        {
          subsubsection("Survey");
          subsubsection("Peano's arithmetic (nat)");
          subsubsection("Notations for interger arithmetic");
          subsubsection("Real numbers library");
          subsubsection("List library");
          subsubsection("Floats library");
        }
        subsection("Users' contributions");
      }
      section("Program extraction");
      {
        subsection("Generating ML code");
        subsection("Extraction Options");
        {
          subsubsection("Setting the target language");
          subsubsection("Inlining and optimizations");
          subsubsection("Extra elimination of useless arguments");
          subsubsection("Realizing axioms");
          subsubsection("Realizing inductive types");
          subsubsection("Avoiding conflicts with existing filenames");
          subsubsection("Aditional settings");
        }
        subsection("Differences between Coq and ML type systems");
        subsection("Some examples");
        {
          subsubsection("A detailed example: Euclidean division");
          subsubsection("Extraction's horror museum");
          subsubsection("Users' Contributions");
        }
      }
      section("Program derivation");
      {
      }
      section("Functional induction");
      {
        subsection("Advanced recusrive functions");
        subsection("Tactics");
        subsection("Generation of induction principles with Functional Scheme");
      }
      section("Writing Coq libraries and plugins");
      {
        subsection("Deprecating library objects or tactics");
      }
    }
    chapter("Command-line and graphical tools");
    {
      section("Building Coq Projects");
      {
        subsection("Coq configuration basics");
        {
          subsubsection("Installing Coq and Coq packages with opam");
          subsubsection("Setup for working on your own projects");
          subsubsection("Building a project with _CoqProject (overview)");
          subsubsection("Logical paths and the load path");
          subsubsection("Modifying multiple intredependent projects at the same time");
          subsubsection("Installed and uninstalled packages");
          subsubsection("Upgrading to a new version of Coq");
        }
        subsection("Building a Coq project with coq_makefile (details)");
        {
          subsubsection("Comments");
        }
        subsection("Building a Coq project with Dune");
        subsection("coqdep: Computing Module dependencies");
        subsection("Split compilation of native computation files");
        subsection("Using Coq as a library");
        subsection("Embedded Coq phrases inside LaTeX documents");
        subsection("Man pages");
      }
      section("Coq commands");
      {
        subsection("Interactive use (coqtop)");
        subsection("Batch compilation (coqc)");
        subsection("Customization at launch time");
        subsection("Command parameters");
        {
          subsubsection("coqrc start up script");
          subsubsection("Environment variables");
          subsubsection("Command line options");
        }
        subsection("Compiled interfaces (produced using -vos)");
        subsection("Compiled libraries checker (coqchk)");
      }
      section("Documenting Coq files with coqdoc");
      {
        subsection("Principles");
        {
          subsubsection("Coq material inside documentation");
          subsubsection("Pretty-printing");
          subsubsection("Sections");
          subsubsection("Lists");
          subsubsection("Rules");
          subsubsection("Emphasis");
          subsubsection("Escaping to LaTeX and HTML");
          subsubsection("Verbatim");
          subsubsection("Hyperlinks");
          subsubsection("Hiding / Showing parts of the source");
        }
        subsection("Usage");
        {
          subsubsection("Command line options");
        }
        subsection("The coqdoc LaTeX style file");
      }
      section("CoqIDE");
      {
        subsection("Managing files and buffers, basic editing");
        subsection("Running Coq scripts");
        subsection("Asynchronous mode");
        subsection("Commands and templates");
        subsection("Queries");
        subsection("Compilation");
        subsection("Customizations");
        {
          subsubsection("Preferences");
          subsubsection("Key bindings");
        }
        subsection("Using Unicode symbols");
        {
          subsubsection("Displaying Unicode symbols");
          subsubsection("Bindings for input of Unicode symbols");
          subsubsection("Adding custom bindings");
          subsubsection("Character encoding fo saved files");
        }
        subsection("Debugger");
        {
          subsubsection("Breakpoints");
          subsubsection("Call Stack and Variables");
          subsubsection("Supported use cases");
        }
      }
      section("Asynchronous and Parallel Proof Processing");
      {
        subsection("Proof annotations");
        {
          subsubsection("Automatic suggestion of proof annotations");
        }
        subsection("Proof blocks and error resilience");
        {
          subsubsection("Caveats");
        }
        subsection("Interactive mode");
        {
          subsubsection("Caveats");
        }
        subsection("Batch mode");
        subsection("Limiting the number of parallel workers");
      }
    }
  }
  part("Appendix");
  {
    appendix("History and recent changes");
    {
      section("Early history of Coq");
      {
        subsection("Historical roots");
        subsection("Version 1 to 5");
        {
          subsubsection("Version 1");
          subsubsection("Version 2");
          subsubsection("Version 3");
          subsubsection("Version 4");
          subsubsection("Version 5");
        }
        subsection("Version 6");
        {
          subsubsection("Version 6.1");
          subsubsection("Version 6.2");
          subsubsection("Version 6.3");
        }
        subsection("Version 7");
        {
          subsubsection("Summary of changes");
          subsubsection("Details of changes in 7.0 and 7.1");
          subsubsection("Details of changes in 7.2");
          subsubsection("Details of changes in 7.3");
          subsubsection("Details of changes in 7.4");
        }
      }
      section("Recent changes");
      {
        subsection("Version 8.17");
        {
          // TODO ?
        }
        subsection("Version 8.16");
        {
          // TODO ?
        }
        subsection("Version 8.15");
        {
          // TODO ?
        }
        subsection("Version 8.14");
        {
          // TODO ?
        }
        subsection("Version 8.13");
        {
          // TODO ?
        }
        subsection("Version 8.12");
        {
          // TODO ?
        }
        subsection("Version 8.11");
        {
          // TODO ?
        }
        subsection("Version 8.10");
        {
          // TODO ?
        }
        subsection("Version 8.9");
        {
          // TODO ?
        }
        subsection("Version 8.8");
        {
          // TODO ?
        }
        subsection("Version 8.7");
        {
          // TODO ?
        }
        subsection("Version 8.6");
        {
          // TODO ?
        }
        subsection("Version 8.5");
        {
          // TODO ?
        }
        subsection("Version 8.4");
        {
          // TODO ?
        }
        subsection("Version 8.3");
        {
          // TODO ?
        }
        subsection("Version 8.2");
        {
          // TODO ?
        }
        subsection("Version 8.1");
        {
          // TODO ?
        }
        subsection("Version 8.0");
        {
          // TODO ?
        }
      }
    }
    appendix("Indexes");
    {
      section("Glossary index");
      {
      }
      section("Command index");
      {
      }
      section("Tactic index");
      {
      }
      section("Attribute index");
      {
      }
      section("Flags, options and tables index");
      {
      }
      section("Errors and warnings index");
      {
      }
      section("General index");
      {
      }
    }
    appendix("Bibliography");
    {
    }
  }
};
