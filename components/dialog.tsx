import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Description } from "@/components/ui/description"

export function ExampleDialog() {
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Example Dialog</DialogTitle>
          <Description>This is a description of the dialog content.</Description>
        </DialogHeader>
        {/* Add your dialog content here */}
      </DialogContent>
    </Dialog>
  )
}

