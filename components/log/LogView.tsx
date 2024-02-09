import { FC, HTMLAttributes, useState } from 'react';
import Paragraph from '../ui/Paragraph';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { FormItems } from '@/lib/formTypes';
import Summary from './Summary';
import { cn } from '@/lib/utils';

interface LogViewProps extends HTMLAttributes<HTMLDivElement>{
	data: FormItems;
}

const LogView: FC<LogViewProps> = ({ data, className }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className={cn(`bg-t-100 rounded flex flex-col ${className}`)}>
			<div className="p-2 flex justify-between items-center">
				<div className="flex gap-4">
					<Paragraph size="sm" className="font-medium text-b-100 dark:text-[#3A2C27] text-left">
						Match <span className="text-r-100 px-1">{data.match}</span>
					</Paragraph>
					<Paragraph size="sm" className="font-medium text-b-100 dark:text-[#3A2C27] text-left">
						Team <span className="text-r-100 px-1">{data.team}</span>
					</Paragraph>
				</div>
				{new Date(data.dateAdded).getTime()}
				<Button variant="hidden" onClick={() => setOpen(!open)}>
					<ChevronDown className={`text-b-100 w-4 ${open ? 'rotate-180' : ''}`} />
				</Button>
			</div>
			{open ? (
				<div className="bg-t-200 rounded p-2 flex flex-wrap gap-2 overflow-scroll">
					<Summary data={data} />
				</div>
			) : null}
		</div>
	);
};

export default LogView;