# 8. Code auditing frameworks

## MyBatis
- `#{id}`: equivalent to JDBC `PreparedStatement`, pre-compiles parameter handling, effectively preventing injection.
- `${id}`: not pre-compiled; merely outputs the variable’s value.

## Spring Framework – IOC and AOP Implementation Principles
The Spring IOC container reads Bean configuration information provided by the application, instantiates Beans, and establishes dependency relationships between them.
AOP defines a cross-cutting concern class (aspect) using the `@Aspect` and `@Component` annotations. With `@Before` and `@After` annotations, the advice methods are specified to execute at certain join points. Configuration: a bean named `loggingAspect` is defined, referencing the `LoggingAspect` class. The `<aop:aspectj-autoproxy/>` element enables AOP auto-proxying.

## Spring MVC Code Logical Structure
The controller is the “C” in MVC, responsible for handling user requests and returning responses. In Spring MVC, controllers are typically defined via annotations or XML configuration. Controllers call the service layer to process business logic, and the results are encapsulated into a model and returned to the view.
