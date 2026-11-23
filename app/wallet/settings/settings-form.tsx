import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldTitle,
  FieldSet,
  FieldLegend
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function WalletSettings() {
  return (
    <div className="mx-auto w-full max-w-lg">
        <FieldGroup>
        <FieldSet>
            <FieldLegend>Payout Details</FieldLegend>
            <FieldDescription>
              All payments are settled T+1
            </FieldDescription>
            <FieldGroup>
                <Field orientation="responsive">
                <FieldContent>
                    <FieldLabel htmlFor="settings-name">
                        Display Name <span className="text-destructive">*</span>
                    </FieldLabel>
                    <FieldDescription>This is your public display name.</FieldDescription>
                </FieldContent>
                <Input id="settings-name" defaultValue="Alex Johnson" size={40} />
                </Field>
                <Field data-invalid>
                <FieldLabel htmlFor="settings-slug">URL Slug</FieldLabel>
                <Input id="settings-slug" defaultValue="alex johnson" />
                <FieldError>
                    Slug can only contain lowercase letters, numbers, and hyphens.
                </FieldError>
                </Field>
                <Field>
                <div className="flex items-center justify-between">
                    <FieldLabel htmlFor="settings-bio">Bio</FieldLabel>
                    <span className="text-muted-foreground text-xs">24/160</span>
                </div>
                <Textarea
                    id="settings-bio"
                    defaultValue="Software engineer & open source contributor."
                    className="min-h-[80px]"
                />
                <FieldDescription>
                    Brief description for your profile.
                </FieldDescription>
                </Field>
                <FieldSeparator />
                <Field orientation="horizontal">
                <FieldContent>
                    <FieldTitle>Email Notifications</FieldTitle>
                    <FieldDescription>
                    Receive emails about account activity.
                    </FieldDescription>
                </FieldContent>
                <Switch id="settings-email-notif" defaultChecked />
                </Field>
                <Field orientation="horizontal">
                <FieldContent>
                    <FieldTitle>Marketing Emails</FieldTitle>
                    <FieldDescription>
                    Receive emails about new features and tips.
                    </FieldDescription>
                </FieldContent>
                <Switch id="settings-marketing" />
                </Field>
                <FieldSeparator />
                <Field orientation="horizontal">
                <Checkbox id="settings-terms" />
                <FieldContent>
                    <FieldTitle>Terms of Service</FieldTitle>
                    <FieldDescription>
                    I agree to the <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy</a>.
                    </FieldDescription>
                </FieldContent>
                </Field>
                <Button className="w-full">Save Changes</Button>
            </FieldGroup>
        </FieldSet>
      <FieldSeparator />
      </FieldGroup>
    </div>
  )
}
