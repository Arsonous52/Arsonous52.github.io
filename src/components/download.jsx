import Button from './button';

export function Direct({project}) {
	if (!project.direct) return;
  return (
		<Button onClick={() => {
			const link = document.createElement('a');
			link.href = project.direct;
			link.click();
		}}>
			Direct Download→
		</Button>
  );
}

export function Itch({project}) {
	if (!project.itch) return;
  return (
		<Button onClick={() => window.open(project.itch, "_blank")}>
			Itch.io→
		</Button>
  );
}

export function Github({project}) {
	if (!project.github) return;
  return (
		<Button onClick={() => window.open(project.github, "_blank")}>
			Github→
		</Button>
  );
}