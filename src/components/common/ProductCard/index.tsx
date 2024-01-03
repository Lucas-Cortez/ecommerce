import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const ProductCard: React.FC = () => {
  return (
    <Card className="w-60">
      <CardHeader className="p-4">
        <div className="flex aspect-square items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-800">
          img.png
        </div>
      </CardHeader>

      <CardContent className="p-4 py-0">
        <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h3>
      </CardContent>

      <CardFooter className="p-4">
        <div>
          <p className="text-sm">
            <span className="line-through">R$ 12,00</span>
          </p>
          <p>
            <span className="font-semibold">R$ 10,00</span> à vista
          </p>
          <p className="text-sm">ou 10x de R$ 1,00 sem juros</p>
        </div>
      </CardFooter>
    </Card>
  );
};
