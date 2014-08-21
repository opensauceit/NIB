# Node Workshopper Wrapper

Does two things:

1. `bin/runner` takes QUESTION_ID in env, and your answer in STDIN, and outputs the validation. Exit status 0 on pass, 1 on fail, or 2 if the test failed unexpectedly
1. `bin/questions` outputs the questions this docker container can run

## Questions JSON

```
{
  id: "some-id",
  problem: "# markdown description"
}
```
