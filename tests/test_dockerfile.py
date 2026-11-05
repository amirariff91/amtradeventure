"""Regression check: Docker must propagate a failed application build."""
import pathlib
import subprocess
import unittest


class DockerBuildTest(unittest.TestCase):
    def test_build_checks_are_not_disabled(self):
        config = pathlib.Path(__file__).resolve().parents[1] / "next.config.js"
        self.assertNotRegex(
            config.read_text(), r"(?:ignoreBuildErrors|ignoreDuringBuilds)\s*:\s*true"
        )

    def test_failed_yarn_build_fails_docker_step(self):
        dockerfile = pathlib.Path(__file__).resolve().parents[1] / "Dockerfile"
        commands = [
            line.removeprefix("RUN ")
            for line in dockerfile.read_text().splitlines()
            if line.startswith("RUN yarn build")
        ]
        self.assertEqual(len(commands), 1)
        # A shell function simulates yarn's nonzero exit without dependencies.
        result = subprocess.run(
            ["sh", "-c", "yarn() { return 42; }; " + commands[0]],
            capture_output=True,
            text=True,
            check=False,
        )
        self.assertEqual(result.returncode, 42, result.stdout + result.stderr)


if __name__ == "__main__":
    unittest.main()
