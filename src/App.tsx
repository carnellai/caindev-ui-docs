import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { DocsShell } from './layouts/DocsShell'
import { Home } from './pages/Home'
import { ButtonPage } from './pages/docs/ButtonPage'
import { SwitchPage } from './pages/docs/SwitchPage'
import { CheckboxPage } from './pages/docs/CheckboxPage'
import { InputPage } from './pages/docs/InputPage'
import { DialogPage } from './pages/docs/DialogPage'
import { SelectPage } from './pages/docs/SelectPage'
import { TabsPage } from './pages/docs/TabsPage'
import { TooltipPage } from './pages/docs/TooltipPage'
import { MenuPage } from './pages/docs/MenuPage'
import { AccordionPage } from './pages/docs/AccordionPage'
import { SliderPage } from './pages/docs/SliderPage'
import { StreamingTextPage } from './pages/docs/StreamingTextPage'
import { MessageBubblePage } from './pages/docs/MessageBubblePage'
import { MessageThreadPage } from './pages/docs/MessageThreadPage'
import { ThinkingBlockPage } from './pages/docs/ThinkingBlockPage'
import { ToolCallCardPage } from './pages/docs/ToolCallCardPage'
import { CodeBlockPage } from './pages/docs/CodeBlockPage'
import { ApprovalCardPage } from './pages/docs/ApprovalCardPage'
import { AgentStepPage } from './pages/docs/AgentStepPage'
import { StructuredOutputPage } from './pages/docs/StructuredOutputPage'
import { PromptInputPage } from './pages/docs/PromptInputPage'
import { TraceTreePage } from './pages/docs/TraceTreePage'
import { EvalBadgePage } from './pages/docs/EvalBadgePage'
import { RunStatusBadgePage } from './pages/docs/RunStatusBadgePage'
import { TokenCostPage } from './pages/docs/TokenCostPage'
import { MetricCardPage } from './pages/docs/MetricCardPage'
import { StatDeltaPage } from './pages/docs/StatDeltaPage'
import { ScoreBarPage } from './pages/docs/ScoreBarPage'
import { SkeletonPage } from './pages/docs/SkeletonPage'
import { EmptyStatePage } from './pages/docs/EmptyStatePage'
import { CardPage } from './pages/docs/CardPage'
import { BadgePage } from './pages/docs/BadgePage'
import { SeparatorPage } from './pages/docs/SeparatorPage'
import { AlertPage } from './pages/docs/AlertPage'
import { TablePage } from './pages/docs/TablePage'
import { ToastPage } from './pages/docs/ToastPage'
import { FormPage } from './pages/docs/FormPage'
import { StackPage } from './pages/docs/StackPage'
import { GridPage } from './pages/docs/GridPage'
import { ContainerPage } from './pages/docs/ContainerPage'
import { SectionPage } from './pages/docs/SectionPage'
import { ProgressPage } from './pages/docs/ProgressPage'
import { DrawerPage } from './pages/docs/DrawerPage'
import { NumberFieldPage } from './pages/docs/NumberFieldPage'
import { ComboboxPage } from './pages/docs/ComboboxPage'
import { PaginationPage } from './pages/docs/PaginationPage'
import { CommandPalettePage } from './pages/docs/CommandPalettePage'
import { GettingStartedPage } from './pages/docs/GettingStartedPage'
import { TypographyPage } from './pages/docs/TypographyPage'
import { ThemeOverviewPage } from './pages/docs/theme/ThemeOverviewPage'
import { ThemeColorPage } from './pages/docs/theme/ThemeColorPage'
import { ThemeDarkModePage } from './pages/docs/theme/ThemeDarkModePage'
import { ThemeRadiusPage } from './pages/docs/theme/ThemeRadiusPage'
import { ThemeShadowsPage } from './pages/docs/theme/ThemeShadowsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docs' element={<DocsShell />}>
          <Route index element={<Navigate to='getting-started' replace />} />
          <Route path='getting-started' element={<GettingStartedPage />} />
          <Route path='theme/overview' element={<ThemeOverviewPage />} />
          <Route path='theme/color' element={<ThemeColorPage />} />
          <Route path='theme/dark-mode' element={<ThemeDarkModePage />} />
          <Route path='theme/typography' element={<TypographyPage />} />
          <Route path='theme/radius' element={<ThemeRadiusPage />} />
          <Route path='theme/shadows' element={<ThemeShadowsPage />} />
          <Route path='button' element={<ButtonPage />} />
          <Route path='switch' element={<SwitchPage />} />
          <Route path='checkbox' element={<CheckboxPage />} />
          <Route path='input' element={<InputPage />} />
          <Route path='dialog' element={<DialogPage />} />
          <Route path='select' element={<SelectPage />} />
          <Route path='tabs' element={<TabsPage />} />
          <Route path='tooltip' element={<TooltipPage />} />
          <Route path='menu' element={<MenuPage />} />
          <Route path='accordion' element={<AccordionPage />} />
          <Route path='slider' element={<SliderPage />} />
          <Route path='streaming-text' element={<StreamingTextPage />} />
          <Route path='message-bubble' element={<MessageBubblePage />} />
          <Route path='message-thread' element={<MessageThreadPage />} />
          <Route path='thinking-block' element={<ThinkingBlockPage />} />
          <Route path='tool-call-card' element={<ToolCallCardPage />} />
          <Route path='code-block' element={<CodeBlockPage />} />
          <Route path='approval-card' element={<ApprovalCardPage />} />
          <Route path='agent-step' element={<AgentStepPage />} />
          <Route path='structured-output' element={<StructuredOutputPage />} />
          <Route path='prompt-input' element={<PromptInputPage />} />
          <Route path='trace-tree' element={<TraceTreePage />} />
          <Route path='eval-badge' element={<EvalBadgePage />} />
          <Route path='run-status-badge' element={<RunStatusBadgePage />} />
          <Route path='token-cost' element={<TokenCostPage />} />
          <Route path='metric-card' element={<MetricCardPage />} />
          <Route path='stat-delta' element={<StatDeltaPage />} />
          <Route path='score-bar' element={<ScoreBarPage />} />
          <Route path='skeleton' element={<SkeletonPage />} />
          <Route path='empty-state' element={<EmptyStatePage />} />
          <Route path='card' element={<CardPage />} />
          <Route path='badge' element={<BadgePage />} />
          <Route path='separator' element={<SeparatorPage />} />
          <Route path='alert' element={<AlertPage />} />
          <Route path='table' element={<TablePage />} />
          <Route path='toast' element={<ToastPage />} />
          <Route path='form' element={<FormPage />} />
          <Route path='stack' element={<StackPage />} />
          <Route path='grid' element={<GridPage />} />
          <Route path='container' element={<ContainerPage />} />
          <Route path='section' element={<SectionPage />} />
          <Route path='progress' element={<ProgressPage />} />
          <Route path='drawer' element={<DrawerPage />} />
          <Route path='number-field' element={<NumberFieldPage />} />
          <Route path='combobox' element={<ComboboxPage />} />
          <Route path='pagination' element={<PaginationPage />} />
          <Route path='command-palette' element={<CommandPalettePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
