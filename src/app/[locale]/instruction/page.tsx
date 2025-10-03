// import { getTranslations } from 'next-intl/server';
import { InstructionHero } from '@/components/instructionHero/InsturctionHero';
import { InstructionStep } from '@/components/instructionStep/InstructionStep';
export default async function Instruction() {
	// const t = await getTranslations('instruction');
	return (
		<main>
			<InstructionHero />
			<InstructionStep />
		</main>
	);
	return;
}
