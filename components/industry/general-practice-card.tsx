import { Card, CardHeader } from "@/components/ui/card";
import { MoveRight } from "lucide-react";

export function GeneralPracticeCard() {
    return (
        <Card className="col-span-1 md:col-span-2 bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-600/30 hover:border-blue-600/60 transition-all">
            <CardHeader className="flex flex-row items-center justify-between p-4">
                <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                        Practice General Interview Questions
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-300">
                        Broaden your skills with questions spanning all industries.
                    </p>
                </div>
                <MoveRight className="w-6 h-6 text-blue-600" />
            </CardHeader>
        </Card>
    );
} 