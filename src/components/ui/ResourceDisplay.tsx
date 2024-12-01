import { Battery, Hammer, Wheat } from 'lucide-react';

interface ResourceDisplayProps {
  label: string;
  value: number;
  icon: React.ReactNode;
}

function ResourceItem({ label, value, icon }: ResourceDisplayProps) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span>
        {label}: {Math.floor(value)}
      </span>
    </div>
  );
}

export function ResourceDisplay({ energy, iron, food }: { 
  energy: number;
  iron: number;
  food: number;
}) {
  return (
    <div className="flex items-center space-x-8">
      <ResourceItem
        label="Energy"
        value={energy}
        icon={<Battery className="w-6 h-6 text-yellow-400" />}
      />
      <ResourceItem
        label="Iron"
        value={iron}
        icon={<Hammer className="w-6 h-6 text-gray-400" />}
      />
      <ResourceItem
        label="Food"
        value={food}
        icon={<Wheat className="w-6 h-6 text-green-400" />}
      />
    </div>
  );
}