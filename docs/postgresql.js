pages.postgresql = (prnt) => {
  const text = (txt) => {
    const p = xce("p");
    xac(p, xctn(txt));
    xac(prnt, p);
    return p;
  };
  const link = (href) => {
    const p = xce("p");
    const a = xce("a");
    a.href = href;
    xac(a, xctn(href));
    xac(p, a);
    xac(prnt, p);
  };
  const part = (num, name) => {
    const joined = "Part " + num + ". " + name;
    text(joined);
  };
  let chNum = 0;
  let sNum = 0;
  const chapter = (name) => {
    ++chNum;
    sNum = 0;
    const joined = "Chapter " + chNum + ". " + name;
    text(joined);
  };
  let lastsection = null;
  const section = (title) => {
    ++sNum;
    const joined = chNum + "." + sNum + ". " + title;
    lastsection = text(joined);
  };
  const hidesection = () => {
    if (lastsection) {
      xrm(lastsection);
    }
  };
  const appendix = (letter, title) => {
    const joined = "Appendix " + letter + ". " + title;
    text(joined);
  };
  text("PostgreSQL Version 15.3");
  link("https://www.postgresql.org/docs/");

  {
    const thePart = part("I", "Tutorial");
    chapter("Getting Started");
    {
      section("Installation");
      {
        text("Environment variable PGHOST and PGPORT");
      }
      section("Architectural Fundamentals");
      {
        // prettier-ignore
        text("The postgres server process forks a new process for each connection");
      }
      section("Creating a Database");
      {
        text('Create a database named "mydb"');
        text("Shell command: createdb mydb");

        text("Create a database named with the user 's name");
        text("Shell command: createdb");

        text("PGUSER environment variable");

        text("Database names must be at most 63 character long");
      }

      section("Accessing a Database");
      {
        text("Connects to the database that has the user's name");
        text("Shell command: psql");

        text("Connects to the database named 'mydb'");
        text("Shell command: psql mydb");

        text("SQL: SELECT version()");
        text("SQL: SELECT current_date");
        text("SQL: SELECT 2 + 2");

        text("For help");
        text("psql command: \\h");

        text("To quit");
        text("psql command: \\q");
      }
    }

    chapter("The SQL Language");
    {
      section("Introduction");
      {
        text("Connect to db mydb (what is the '-s' switch for?)");
        text(" the '-s' switch enables single step mode");
        text("Shell command: psql -s mydb");

        text("Read file basics.sql");
        text("PSQL command: \\i basics.sql");
      }
      section("Concepts");
      {
        text("data/rows/tables/databases/clusters");
      }
      section("Creating a New Table");
      {
        text("CREATE TABLE mytable (mycolumn mytype);");
        text("where mytype can be varchar(80), int, real, date, ...");
        // prettier-ignore
        text("some types: int, smallint, real, double precision, char(N), varchar(N), date, time, timestamp, interval, ...");
        text("another type: point");

        text("To remove a table");
        text("SQL Command: DROP TABLE mytable");
      }
      section("Populating a Table With Rows");
      {
        // prettier-ignore
        text("SQL Command: INSERT INTO mytable VALUES('valueForCol1', 'valueForCol2');");
        text("For dates: '2023-08-10");
        text("For points: '(25, 30)'");

        text("Explicit column names");
        // prettier-ignore
        text("SQL Command: INSERT INTO mytable (col1, col2) VALUES('valueForCol1', 'valueForCol2');");
        // prettier-ignore
        text("Some columns can be omitted and will receive their default value");

        text("To load large amounts of data from text files, use COPY");
        text("SQL Command: COPY mytabel FROM 'myfile.txt'");
      }
      section("Querying a Table");
      hidesection();
      
      section("Joins Between Tables");
      hidesection();

      section("Aggregate Functions");
      {
        text("Aggregates can filtered");
        text("SQL Query: SELECT ... count(*) FILTER (WHERE somecondition) group by somegrouping")
      }
      section("Updates");
      {
      }
      section("Deletions");
      {
      }
    }

    chapter("Advanced Features");
    section("Introduction");
    section("Views");
    section("Foreign Keys");
    section("Transactions");
    section("Window Functions");
    section("Inheritance");
    section("Conclusion");
  }
  {
    const thePart = part("II", "The SQL Language");
    chapter("SQL Syntax");
    section("Lexical Structure");
    section("Value Expressions");
    section("Calling Functions");

    chapter("Data Definition");
    section("Table Basics");
    section("Default Values");
    section("Generated Columns");
    section("Constraints");
    section("System Columns");
    section("Modifying Tables");
    section("Privileges");
    section("Row Security Policies");
    section("Schemas");
    section("Inheritance");
    section("Table Partitioning");
    section("Foreign Data");
    section("Other Database Objects");
    section("Dependency Tracking");

    chapter("Data Manipulation");
    section("Inserting Data");
    section("Updating Data");
    section("Deleting Data");
    section("Returning Data from Modified Rows");

    chapter("Queries");
    section("Overview");
    section("Table Expressions");
    section("Select Lists");
    section("Combining Queries (UNION, INTERSECT, EXCEPT)");
    section("Sorting Rows (ORDER BY)");
    section("LIMIT and OFFSET");
    section("VALUES Lists");
    section("WITH Queries (Common Table Expressions)");

    chapter("Data Types");
    section("Numeric Types");
    section("Monetary Types");
    section("Character Types");
    section("Binary Data Types");
    section("Date/Time Types");
    section("Boolean Type");
    section("Enumerated Types");
    section("Geometric Types");
    section("Network Address Types");
    section("Bit String Types");
    section("Text Search Types");
    section("UUID Type");
    section("XML Type");
    section("JSON Types");
    section("Arrays Types");
    section("Composite Types");
    section("Range Types");
    section("Domain Types");
    section("Object Identifier Types");
    section("pg_Isn Type");
    section("Pseudo-Types");

    chapter("Functions and Operators");
    section("Logical Operators");
    section("Comparison Functions and Operators");
    section("Mathematical Functions and Operators");
    section("String Functions and Operators");
    section("Binary String Functions and Operators");
    section("Bit String Functions and Operators");
    section("Pattern Matching Functions and Operators");
    section("Data Type Formatting Functinos");
    section("Date/Time Functions and Operators");
    section("Enum Support Functions");
    section("Geometric Functions and Operators");
    section("Network Address Functions and Operators");
    section("Text Search Functions and Operators");
    section("UUID Functions");
    section("XML Functions");
    section("JSON Functions and Operators");
    section("Sequence Manipulation Functions");
    section("Conditional Expressions");
    section("Array Functions and Operators");
    section("Range/Multirange Functions and Operators");
    section("Aggregate Functions");
    section("Window Functions");
    section("Subquery Expressions");
    section("Row and Array Comparisons");
    section("Set Returning Functions");
    section("System Information Functions and Operators");
    section("System Administration Functions");
    section("Trigger Functions");
    section("Event Trigger Functions");
    section("Statistics Information Functions");

    chapter("Type Conversion");
    section("Overview");
    section("Operators");
    section("Functions");
    section("Value Storage");
    section("UNION, CASE, and Related Constructs");
    section("SELECT Output Columns");

    chapter("Indexes");
    section("Introduction");
    section("Index Types");
    section("Multicolumn Indexes");
    section("Indexes and ORDER BY");
    section("Combining Multiple Indexes");
    section("Unique Indexes");
    section("Indexes on Expressions");
    section("Partial Indexes");
    section("Index-Only Scans and Covering Indexes");
    section("Operator Classes and Operator Families");
    section("Indexes and Collations");
    section("Examining Index Usage");

    chapter("Full Text Search");
    section("Introduction");
    section("Tables and Indexes");
    section("Controlling Text Search");
    section("Additional Features");
    section("Parsers");
    section("Dictionaries");
    section("Configuration Example");
    section("Testing and Debugging Text Search");
    section("Preferred Index Types for Text Search");
    section("psql Support");
    section("Limitations");

    chapter("Concurrency Control");
    section("Introduction");
    section("Transaction Isolation");
    section("Explicit Locking");
    section("Data Consistency checks at the Application Level");
    section("Serialization Failure Handling");
    section("Caveats");
    section("Locking and Indexes");

    chapter("Performance Tips");
    section("Using EXPLAIN");
    section("Statistics used by the Planner");
    section("Controlling the Planner with Explicit JOIN Clauses");
    section("Populating a Database");
    section("Non-Durable Settings");

    chapter("Parallel Query");
    section("How Parallel Query Works");
    section("When Can Parallel Query Be Used?");
    section("Parallel Plans");
    section("Parallel Safety");
  }
  {
    const thePart = part("III", "Server Administration");
    chapter("Installation from Binaries");

    chapter("Installation from Source Code");
    section("Short Version");
    section("Requirements");
    section("Getting the Source");
    section("Innstallation Procedure");
    section("Post-Installation Setup");
    section("Supported Platforms");
    section("Platform-Specifi Notes");

    chapter("Installation from Source Code on Windows");
    section("Building with Visual C++ on the Microsoft Windows SDK");

    chapter("Server Setup and Operation");
    section("The PostgreSQL User Account");
    section("Creating a Database Cluster");
    section("Starting the Database Server");
    section("Managing Kernel Resources");
    section("Shutting Down the Server");
    section("Upgrading a PostgreSQL Cluster");
    section("Preventing Server Spoofing");
    section("Encryption Options");
    section("Secure TCP/IP Connections with SSL");
    section("Secure TCP/IP Connections with GSSAPI Encryption");
    section("Secure TCP/IP Connections with SSH Tunnels");
    section("Registering Event Log on Windows");

    chapter("Server Configuration");
    section("Setting Parameters");
    section("File Locations");
    section("Connections and Authentication");
    section("Resource Consumption");
    section("Write Ahead Log");
    section("Replication");
    section("Query Planning");
    section("Error Reporting and Logging");
    section("Run-time Statistics");
    section("Automatic Vacuuming");
    section("Client Connection Defaults");
    section("Lock Management");
    section("Version and Platform Compatibility");
    section("Error Handling");
    section("Preset Options");
    section("Customized Options");
    section("Developer Options");
    section("Short Options");

    chapter("Client Authentication");
    section("The pg_hba.conf File");
    section("User Name Maps");
    section("Authentication Methods");
    section("Trust Authentication");
    section("Password Authentication");
    section("GSSAPI Authentication");
    section("SSPI Authentication");
    section("Ident Authentication");
    section("Peer Authentication");
    section("LDAP Authentication");
    section("RADIUS Authentication");
    section("Certificate Authentication");
    section("PAM Authentication");
    section("BSD Authentication");
    section("Authentication Problems");

    chapter("Database Roles");
    section("Database Roles");
    section("Role Attributes");
    section("Role Membership");
    section("Dropping Roles");
    section("Predefined Roles");
    section("Function Security");

    chapter("Managing Databases");
    section("Overview");
    section("Creating a Database");
    section("Template Databases");
    section("Database Configuration");
    section("Destroying a Database");
    section("Tablespaces");

    chapter("Localization");
    section("Locale Support");
    section("Collation Support");
    section("Character Set Support");

    chapter("Routine Database Maintenance Tasks");
    section("Routine Vacuuming");
    section("Routing Reindexing");
    section("Log File Maintenance");

    chapter("Backup and Restore");
    section("SQL Dump");
    section("File System Level Backup");
    section("Continuous Arching and Point-in-Time Recovery (PITR)");

    chapter("High Availability, Load Balancing, and Replication");
    section("Comparison of Different Solutions");
    section("Log-Shiipping Standby Servers");
    section("Failover");
    section("Hot Standby");

    chapter("Monitoring Database Activity");
    section("Standard Unix Tools");
    section("The Cumulative Statistics System");
    section("Viewing Locks");
    section("Progress Reporting");
    section("Dynamic Tracing");

    chapter("Monitoring Disk Usage");
    section("Determining Disk Usage");
    section("Disk Full Failure");

    chapter("Reliability and the Write-Ahead Log");
    section("Reliability");
    section("Data Checksums");
    section("Write-Ahead Logging (WAL)");
    section("Asynchronous Commit");
    section("WAL Configuration");
    section("WAL Internals");

    chapter("Logical Replication");
    section("Publication");
    section("Subscription");
    section("Row Filters");
    section("Column Lists");
    section("Conflicts");
    section("Restrictions");
    section("Architecture");
    section("Monitoring");
    section("Security");
    section("Configuration Settings");
    section("Quick Setup");

    chapter("Just-in-Time Compilation (JIT)");
    section("What is JIT compilation?");
    section("When to JIT?");
    section("Configuration");
    section("Extensibility");

    chapter("Regression Tests");
    section("Running the Tests");
    section("Test Evaluation");
    section("Variant Comparison Files");
    section("TAP Tests");
    section("Test Coverage Examination");
  }
  {
    const thePart = part("IV", "Client Interfaces");
    chapter("libpq - C Library");
    section("Database Connection Control Functions");
    section("Connection Status Functions");
    section("Command Execution Functions");
    section("Asynchronous Command Processing");
    section("Pipeline Mode");
    section("Retrieving Query Results Row-by-Row");
    section("Canceling Queries in Progress");
    section("The Fast-Path Interface");
    section("Asynchronous Notification");
    section("Functiosn Associated with the COPY Command");
    section("Control Functions");
    section("Miscellaneous Functions");
    section("Notice Processing");
    section("Event System");
    section("Environment Variables");
    section("The Password File");
    section("The Connection Service File");
    section("LDAP Lookup of Connection Parameters");
    section("SSL Support");
    section("Behavior in Threaded Programs");
    section("Building libpq Programs");
    section("Example Programs");

    chapter("Large Objects");
    section("Introduction");
    section("Implementation Features");
    section("Client Interfaces");
    section("Server-Side Functions");
    section("Example Program");

    chapter("ECPG - Embedded SQL in C");
    section("The Concept");
    section("Managing Database Connections");
    section("Running SQL Commands");
    section("Using Host Variables");
    section("Dynamic SQL");
    section("pgtypes Library");
    section("Using Descriptor Areas");
    section("Error Handling");
    section("Preprocessor Directives");
    section("Processing Embedded SQL Programs");
    section("Library Functions");
    section("Large Objects");
    section("C++ Applications");
    section("Embedded SQL Commands");
    section("Informix Compatibility Mode");
    section("Oracle Compatibility Mode");
    section("Internals");

    chapter("The Information Schema");
    section("The Schema");
    section("Data Types");
    section("information_schema_catalog_name");
    section("administrable_role_authorizations");
    section("applicable_roles");
    section("attributes");
    section("character_sets");
    section("check_constraint_routine_usage");
    section("check_constraints");
    section("collations");
    section("collation_character_set_applicability");
    section("column_column_usage");
    section("column_domain_usage");
    section("column_options");
    section("column_privileges");
    section("column_udt_usage");
    section("columns");
    section("constraint_column_usage");
    section("constraint_table_usage");
    section("data_type_privileges");
    section("domain_constraints");
    section("domain_udt_usage");
    section("domains");
    section("element_types");
    section("enabled_roles");
    section("foreign_data_wrapper_options");
    section("foreign_data_wrappers");
    section("foreign_server_options");
    section("foreign_servers");
    section("foreign_table_options");
    section("foreign_tables");
    section("key_column_usage");
    section("parameters");
    section("referential_constraints");
    section("role_column_grants");
    section("role_routine_grants");
    section("role_table_grants");
    section("role_udt_grants");
    section("role_usage_grants");
    section("routine_column_usage");
    section("routine_privileges");
    section("routine_routine_usage");
    section("routine_sequence_usage");
    section("routine_table_usage");
    section("routines");
    section("schemata");
    section("sequences");
    section("sql_features");
    section("sql_implementation_info");
    section("sql_parts");
    section("sql_sizing");
    section("table_constraints");
    section("table_privileges");
    section("tables");
    section("transforms");
    section("triggered_update_columns");
    section("triggers");
    section("udt_privileges");
    section("usage_privileges");
    section("user_defined_types");
    section("user_mapping_options");
    section("user_mappings");
    section("view_column_usage");
    section("view_routine_usage");
    section("view_table_usage");
    section("views");
  }
  {
    const thePart = part("V", "Server Programming");
    chapter("Extending SQL");
    section("How Extensibility Works");
    section("The PostgreSQL Type System");
    section("User-Defined Functions");
    section("User-Defined Procedures");
    section("Query Language (SQL) Functions");
    section("Function Overloading");
    section("Function Volatility Categories");
    section("Procedural Language Functions");
    section("Internal Functions");
    section("C-Language Functions");
    section("Function Optimization Information");
    section("User-Defined Aggregates");
    section("User-Defined Types");
    section("Operator Optimization Information");
    section("Interfacing Extensions to Indexes");
    section("Packaging Related Objects into an Extension");
    section("Extension Building Infrastructure");

    chapter("Triggers");
    section("Overview of Trigger Behavior");
    section("Visibility of Data Changes");
    section("Writing Trigger Functions in C");
    section("A Complete Trigger Example");

    chapter("Event Triggers");
    section("Overview of Event Trigger Behavior");
    section("Event Trigger Firing Matrix");
    section("Writing Event Trigger Functions in C");
    section("A Complete Event Trigger Example");
    section("A Table Rewrite Event Trigger Example");

    chapter("The Rule System");
    section("The Query Tree");
    section("View and the Rule System");
    section("Rules on INSERT, UPDATE, and DELETE");
    section("Rules and Privileges");
    section("Rules and Command Status");
    section("Rules Versus Triggers");

    chapter("Procedural Languages");
    section("Installing Procedural Languages");

    chapter("PL/pgSQL - SQL Procedural Language");
    section("Overview");
    section("Structure of PL/pgSQL");
    section("Declarations");
    section("Expressions");
    section("Basic Statements");
    section("Control Structures");
    section("Cursors");
    section("Transaction Management");
    section("Errors and Messages");
    section("Trigger Functions");
    section("PL/pgSQL under the Hood");
    section("Tips for Developing in PL/pgSQL");
    section("Porting from Oracle PL/SQL");

    chapter("PL/Tcl - Tcl Procedural Language");
    section("Overview");
    section("PL/Tcl Functions and Arguments");
    section("Data VAlues in PL/Tcl");
    section("Global Data in PL/Tcl");
    section("Database Access from PL/Tcl");
    section("Trigger Functions in PL/Tcl");
    section("Event Trigger Functions in PL/Tcl");
    section("Error Handling in PL/Tcl");
    section("Explicit Subtransactions in PL/Tcl");
    section("Transaction Management");
    section("PL/Tcl Configuration");
    section("Tcl Procedure Names");

    chapter("PL/Perl - Perl Procedural Language");
    section("PL/Perl Functions and Arguments");
    section("Data Values in PL/Perl");
    section("Built-in Functions");
    section("Global Values in PL/Perl");
    section("Trusted and Untrusted PL/Perl");
    section("PL/Perl Triggers");
    section("PL/Perl Event Triggers");
    section("PL/Perl Under the Hood");

    chapter("PL/Python - Python Procedural Language");
    section("PL/Python Functions");
    section("Data Values");
    section("Sharing Data");
    section("Anonymous Code Blocks");
    section("Trigger Functions");
    section("Database Access");
    section("Explicit Subtransactions");
    section("Transaction Management");
    section("Utility Functions");
    section("Python 2 vs. Python 3");
    section("Environment Variables");

    chapter("Server Programming Interface");
    section("Interface Functions");
    section("Interface Support Functions");
    section("Memory Management");
    section("Transaction Management");
    section("Visibility of Data Changes");
    section("Examples");

    chapter("Background Worker Processes");

    chapter("Logical Decoding");
    section("Logical Decoding Examles");
    section("Logical Decoding Concepts");
    section("Streaming Replication Protocol Interface");
    section("Logical Decoding SQL Interface");
    section("System Catalogs Related to Logical Decoding");
    section("Logical Decoding Output Plugins");
    section("Logical Decoding Output Writers");
    section("Synchronous Replication Support for Logical Decoding");
    section("Streaming of Large Transactions for Logical Decoding");
    section("Two-phase Commit Support for Logical Decoding");

    chapter("Replication Progress Tracking");

    chapter("Archive Modules");
    section("Initialization Functions");
    section("Archive Module Callbacks");
  }
  {
    const thePart = part("VI", "Reference");
    chapter("SQL Commands");
    section("ABORT");
    section("ALTER AGGREGATE");
    section("ALTER COLLATION");
    section("ALTER CONVERSION");
    section("ALTER DATABASE");
    section("ALTER DEFAULT PRIVILEGES");
    section("ALTER DOMAIN");
    section("ALTER EVENT TRIGGER");
    section("ALTER EXTENSION");
    section("ALTER FOREIGN DATA WRAPPER");
    section("ALTER FOREIGN TABLE");
    section("ALTER FUNCTION");
    section("ALTER GROUP");
    section("ALTER INDEX");
    section("ALTER LANGUAGE");
    section("ALTER LARGE OBJECT");
    section("ALTER MATERIALIZED VIEW");
    section("ALTER OPERATOR");
    section("ALTER OPERATOR CLASS");
    section("ALTER OPERATOR FAMILY");
    section("ALTER POLICY");
    section("ALTER PROCEDURE");
    section("ALTER PUBLICATION");
    section("ALTER ROLE");
    section("ALTER ROUTINE");
    section("ALTER RULE");
    section("ALTER SCHEMA");
    section("ALTER SEQUENCE");
    section("ALTER SERVER");
    section("ALTER STATISTICS");
    section("ALTER SUBSCRIPTION");
    section("ALTER SYSTEM");
    section("ALTER TABLE");
    section("ALTER TABLESPACE");
    section("ALTER TEXT SEARCH CONFIGURATION");
    section("ALTER TEXT SEARCH DICTIONARY");
    section("ALTER TEXT SEARCH PARSER");
    section("ALTER TEXT SEARCH TEMPLATE");
    section("ALTER TRIGGER");
    section("ALTER TYPE");
    section("ALTER USER");
    section("ALTER USER MAPPING");
    section("ALTER VIEW");
    section("ANALYZE");
    section("BEGIN");
    section("CALL");
    section("CHECKPOINT");
    section("CLOSE");
    section("CLUSTER");
    section("COMMENT");
    section("COMMIT");
    section("COMMIT PREPARED");
    section("COPY");
    section("CREATE ACCESS METHOD");
    section("CREATE AGGREGATE");
    section("CREATE CAST");
    section("CREATE COLLATION");
    section("CREATE CONVERSION");
    section("CREATE DATABASE");
    section("CREATE DOMAIN");
    section("CREATE EVENT TRIGGER");
    section("CREATE EXTENSION");
    section("CREATE FOREIGN DATA WRAPPER");
    section("CREATE FOREIGN TABLE");
    section("CREATE FUNCTION");
    section("CREATE GROUP");
    section("CREATE INDEX");
    section("CREATE LANGUAGE");
    section("CREATE MATERIALIZED VIEW");
    section("CREATE OPERATOR");
    section("CREATE OPERATOR CLASS");
    section("CREATE OPERATOR FAMILY");
    section("CREATE POLICY");
    section("CREATE PROCEDURE");
    section("CREATE PUBLICATION");
    section("CREATE ROLE");
    section("CREATE RULE");
    section("CREATE SCHEMA");
    section("CREATE SEQUENCE");
    section("CREATE SERVER");
    section("CREATE STATISTICS");
    section("CREATE SUBSCRIPTION");
    section("CREATE TABLE");
    section("CREATE TABLE AS");
    section("CREATE TABLESPACE");
    section("CREATE TEXT SEARCH CONFIGURATION");
    section("CREATE TEXT SEARCH DICTIONARY");
    section("CREATE TEXT SEARCH PARSER");
    section("CREATE TEXT SEARCH TEMPLATE");
    section("CREATE TRANSFORM");
    section("CREATE TRIGGER");
    section("CREATE TYPE");
    section("CREATE USER");
    section("CREATE USER MAPPING");
    section("CREATE VIEW");
    section("DEALLOCATE");
    section("DECLARE");
    section("DELETE");
    section("DISCARD");
    section("DO");
    section("DROP ACCESS METHOD");
    section("DROP AGGREGATE");
    section("DROP CAST");
    section("DROP COLLATION");
    section("DROP CONVERSION");
    section("DROP DATABASE");
    section("DROP DOMAIN");
    section("DROP EVENT TRIGGER");
    section("DROP EXTENSION");
    section("DROP FOREIGN DATA WRAPPER");
    section("DROP FOREIGN TABLE");
    section("DROP FUNCTION");
    section("DROP GROUP");
    section("DROP INDEX");
    section("DROP LANGUAGE");
    section("DROP MATERIALIZED VIEW");
    section("DROP OPERATOR");
    section("DROP OPERATOR CLASS");
    section("DROP OPERATOR FAMILY");
    section("DROP OWNED");
    section("DROP POLICY");
    section("DROP PROCEDURE");
    section("DROP PUBLICATION");
    section("DROP ROLE");
    section("DROP ROUTINE");
    section("DROP RULE");
    section("DROP SCHEMA");
    section("DROP SEQUENCE");
    section("DROP SERVER");
    section("DROP STATISTICS");
    section("DROP SUBSCRITION");
    section("DROP TABLE");
    section("DROP TABLESPACE");
    section("DROP TEXT SEARCH CONFIGURATION");
    section("DROP TEXT SEARCH DICTIONARY");
    section("DROP TEXT SEARCH PARSER");
    section("DROP TEXT SEARCH TEMPLATE");
    section("DROP TRANSFORM");
    section("DROP TRIGGER");
    section("DROP TYPE");
    section("DROP USER");
    section("DROP USER MAPPING");
    section("DROP VIEW");
    section("END");
    section("EXECUTE");
    section("EXPLAIN");
    section("FETCH");
    section("GRANT");
    section("IMPORT FOREIGN SCHEMA");
    section("INSERT");
    section("LISTEN");
    section("LOAD");
    section("LOCK");
    section("MERGE");
    section("MOVE");
    section("NOTIFY");
    section("PREPARE");
    section("PREPARE TRANSACTION");
    section("REASSIGN OWNED");
    section("REFRESH MATERIALIZED VIEW");
    section("REINDEX");
    section("RELEASE SAVEPOINT");
    section("RESET");
    section("REVOKE");
    section("ROLLBACK");
    section("ROLLBACK PREPARED");
    section("ROLLBACK TO SAVEPOINT");
    section("SAVEPOINT");
    section("SECURITY LABEL");
    section("SELECT");
    section("SELECT INTO");
    section("SET");
    section("SET CONSTRAINTS");
    section("SET ROLE");
    section("SET SESSION AUTHORIZATION");
    section("SET TRANSACTION");
    section("SHOW");
    section("START TRANSACTION");
    section("TRUNCATE");
    section("UNLISTEN");
    section("UPDATE");
    section("VACUUM");
    section("VALUES");

    chapter("PostgreSQL Client Applications");
    section("clusterdb");
    section("createdb");
    section("createuser");
    section("dropdb");
    section("dropuser");
    section("ecpg");
    section("pg_amcheck");
    section("pg_basebackup");
    section("pgbench");
    section("pg_config");
    section("pg_dump");
    section("pg_dumpall");
    section("pg_isready");
    section("pg_receivewal");
    section("pg_recvlogical");
    section("pg_restore");
    section("pg_verifybackup");
    section("psql");
    section("reindexdb");
    section("vacuumdb");

    chapter("PostgreSQL Server Applications");
    section("initdb");
    section("pg_archivecleanup");
    section("pg_checksums");
    section("pg_controldata");
    section("pg_ctl");
    section("pg_resetwal");
    section("pg_rewind");
    section("pg_test_fsync");
    section("pg_test_timing");
    section("pg_upgrade");
    section("pg_waldump");
    section("postgres");
    section("postmaster");
  }
  {
    const thePart = part("VII", "Internals");
    chapter("Overview of PostgreSQL Internals");
    section("The Path of a Query");
    section("How Connections Are Established");
    section("The Parser Stage");
    section("The PostgreSQL Rule System");
    section("Planner/Optimizer");
    section("Executor");

    chapter("System Catalogs");
    section("Overview");
    section("pg_aggregate");
    section("pg_am");
    section("pg_amop");
    section("pg_amproc");
    section("pg_attref");
    section("pg_attribute");
    section("pg_authid");
    section("pg_auth_members");
    section("pg_cast");
    section("pg_class");
    section("pg_collation");
    section("pg_constraint");
    section("pg_conversion");
    section("pg_database");
    section("pg_db_role_setting");
    section("pg_default_acl");
    section("pg_depend");
    section("pg_description");
    section("pg_enum");
    section("pg_event_trigger");
    section("pg_extension");
    section("pg_foreign_data_wrapper");
    section("pg_foreign_server");
    section("pg_foreign_table");
    section("pg_index");
    section("pg_inherits");
    section("pg_init_privs");
    section("pg_language");
    section("pg_largeobject");
    section("pg_largeobject_metadata");
    section("pg_namespace");
    section("pg_opclass");
    section("pg_operator");
    section("pg_opfamily");
    section("pg_parameter_acl");
    section("pg_partitioned_table");
    section("pg_policy");
    section("pg_proc");
    section("pg_publication");
    section("pg_publication_namespace");
    section("pg_publication_rel");
    section("pg_range");
    section("pg_replication_origin");
    section("pg_rewrite");
    section("pg_seclabel");
    section("pg_sequence");
    section("pg_shdepend");
    section("pg_shdescription");
    section("pg_shseclabel");
    section("pg_statistic");
    section("pg_statistic_ext");
    section("pg_statistic_ext_data");
    section("pg_subscription");
    section("pg_subscription_rel");
    section("pg_tablespace");
    section("pg_transform");
    section("pg_trigger");
    section("pg_ts_config");
    section("pg_ts_config_map");
    section("pg_ts_dict");
    section("pg_ts_parser");
    section("pg_ts_template");
    section("pg_type");
    section("pg_user_mapping");

    chapter("System Views");
    section("Overview");
    section("pg_available_extensions");
    section("pg_available_extension_versions");
    section("pg_backend_memory_contexts");
    section("pg_config");
    section("pg_cursors");
    section("pg_file_settings");
    section("pg_group");
    section("pg_hba_file_rules");
    section("pg_ident_file_mappings");
    section("pg_indexes");
    section("pg_locks");
    section("pg_matviews");
    section("pg_policies");
    section("pg_prepared_statements");
    section("pg_prepared_xacts");
    section("pg_publication_tables");
    section("pg_replication_origin_status");
    section("pg_replication_slots");
    section("pg_roles");
    section("pg_rules");
    section("pg_seclabels");
    section("pg_sequences");
    section("pg_settings");
    section("pg_shadow");
    section("pg_shmem_allocations");
    section("pg_stats");
    section("pg_stats_ext");
    section("pg_stats_ext_exprs");
    section("pg_tables");
    section("pg_timezone_abbrevs");
    section("pg_timezone_names");
    section("pg_user");
    section("pg_user_mappings");
    section("pg_views");

    chapter("Frontend/Backend Protocol");
    section("Overview");
    section("Message Flow");
    section("SASL Authentication");
    section("Streaming Replication Protocol");
    section("Logical Streaming Replication Protocol");
    section("Message Data Types");
    section("Message Formats");
    section("Error and Notice Message Fields");
    section("Logical Replication Message Formats");
    section("Summary of Changes since Protocol 2.0");

    chapter("PostgreSQL Coding Conventions");
    section("Formatting");
    section("Reporting Errors Within the Server");
    section("Error Message Style Guide");
    section("Miscellaneous Coding Conventions");

    chapter("Native Language Support");
    section("For the Translator");
    section("For the Programmer");

    chapter("Writing a Procedural Language Handler");

    chapter("Writing a Foreign Data Wrapper");
    section("Foreign Data Wrapper Functions");
    section("Foreign Data Wrapper Callback Routines");
    section("Foreign Data Wrapper Helper Functions");
    section("Foreign Data Wrapper Query Planning");
    section("Row Locking in Foreign Data Wrappers");

    chapter("Writing a Table Sampling Method");
    section("Sampling Method Support Functions");

    chapter("Writing a Custom Scan Provider");
    section("Creating Custom Scan Paths");
    section("Creating Custom Scan Plans");
    section("Executing Custom Scans");

    chapter("Genetic Query Optimizer");
    section("Query Handling as a Complex Optimization Problem");
    section("Genetic Algorithms");
    section("Genetic Query Optimization (GEQO) in PostgreSQL");
    section("Further Reading");

    chapter("Table Access Method Interface Definition");

    chapter("Index Access Method Interface Definition");
    section("Basic API Structure for Indexes");
    section("Index Access Method Functions");
    section("Index Scanning");
    section("Index Locking Considrations");
    section("Index Uniqueness Checks");
    section("Index Cost Estimation Functions");

    chapter("Generic WAL Records");

    chapter("Custom WAL Resource Managers");

    chapter("B-Tree Indexes");
    section("Introduction");
    section("Behavior of B-Tree Operator Classes");
    section("B-Tree Support Functions");
    section("Implementation");

    chapter("GiST Indexes");
    section("Introduction");
    section("Built-in Operator Classes");
    section("Extensibility");
    section("Implementation");
    section("Examples");

    chapter("SP-GiST Indexes");
    section("Introduction");
    section("Built-in Operator Classes");
    section("Extensibility");
    section("Implementation");
    section("Examples");

    chapter("GIN Indexes");
    section("Introduction");
    section("Built-in Operator Classes");
    section("Extensibility");
    section("Implementation");
    section("GIN Tips and Tricks");
    section("Limitations");
    section("Examples");

    chapter("BRIN Indexes");
    section("Introduction");
    section("Built-in Operator Classes");
    section("Extensibility");

    chapter("Hash Indexes");
    section("Overview");
    section("Implementation");

    chapter("Database Physical Storage");
    section("Database File Layout");
    section("TOAST");
    section("Free Space Map");
    section("Visibility Map");
    section("The Initialization Fork");
    section("Database Page Layout");
    section("Heap-Only Tuples (HOT)");

    chapter("System Catalog Declarations and Initial Contents");
    section("System Catalog Declaration Rules");
    section("System Catalog Initial Data");
    section("BKI File Format");
    section("BKI Commands");
    section("Structure of the Boostrap BKI File");
    section("BKI Example");

    chapter("How the Planner Uses Statistics");
    section("Row Estimation EXamples");
    section("Multivariate Statistics Example");
    section("Planner Statistics and Security");

    chapter("Backup Manifest Format");
    section("Backup Top-level Object");
    section("Backup Manifest File Object");
    section("Backup Manifest WAL Range Object");
  }
  {
    const thePart = part("VIII", "Appendixes");
    appendix("A", "PostgreSQL Error Codes");

    appendix("B", "Date/Time Support");
    section("Date/Time Input Interpretation");
    section("Handling of Invalid or Ambiguous Timestamps");
    section("Date/Time Key Words");
    section("Date/Time Configuration Files");
    section("POSIX Time Zone Specifications");
    section("History of Units");
    section("Julian Dates");

    appendix("C", "SQL Key Words");

    appendix("D", "SQL Conformance");
    section("Supported Features");
    section("Unsupported Features");
    section("XML Limits and Conformance to SQL/XML");

    appendix("E", "Release Notes");
    section("Release 15.3");
    section("Release 15.2");
    section("Release 15.1");
    section("Release 15");
    section("Prior Releases");

    appendix("F", "Additional Supplied Modules");
    section("adminpack");
    section("amcheck");
    section("auth_delay");
    section("auto_explain");
    section("basebackup_to_shell");
    section("basic_archive");
    section("bloom");
    section("btree_gin");
    section("btree_gist");
    section("citext");
    section("cube");
    section("dblink");
    section("dict_int");
    section("dict_xsyn");
    section("earthdistance");
    section("file_fdw");
    section("fuzzystrmatch");
    section("hstore");
    section("intagg");
    section("intarray");
    section("isn");
    section("lo");
    section("ltree");
    section("old_snapshot");
    section("pageinspect");
    section("passwordcheck");
    section("pg_buffercache");
    section("pgcrypto");
    section("pg_freespacemap");
    section("pg_prewarm");
    section("pgrowlocks");
    section("pg_stat_statements");
    section("pgstattuple");
    section("pg_surgery");
    section("pg_trgm");
    section("pg_visibility");
    section("pg_walinspect");
    section("postgres_fdw");
    section("seg");
    section("sepgsql");
    section("spi");
    section("sslinfo");
    section("tablefunc");
    section("tcn");
    section("test_decoding");
    section("tsm_system_rows");
    section("tms_system_time");
    section("unaccent");
    section("uuid-ossp");
    section("xml2");

    appendix("G", "Additional Supplied Programs");
    section("Client Applications");
    section("Server Applications");

    appendix("H", "External Projects");
    section("Client Interfaces");
    section("Administration Tools");
    section("Procedural Languages");
    section("Extensions");

    appendix("I", "The Source Code Repository");
    section("Getting the Source via Git");

    appendix("J", "Documentation");
    section("DocBook");
    section("Tool Sets");
    section("Building the Documentation");
    section("Documentation Authoring");
    section("Style Guide");

    appendix("K", "PostgreSQL Limits");
    appendix("L", "Acronyms");
    appendix("M", "Glossary");
    appendix("N", "Color Support");
    section("When Color is Used");
    section("Configuring the Colors");

    appendix("O", "Obsolete or Renamed Features");
    section("recovery.conf file merged into postgresql.conf");
    section("Default Roels Renamed to Predefined Roles");
    section("pg_xlogdump renamed to pg_waldump");
    section("pg_resetxlog renamed to pg_resetwal");
    section("pg_receivexlog renamed to pg_receivewal");
  }
};
